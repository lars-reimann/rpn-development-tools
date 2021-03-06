import {ExecutionState, RpnValue} from "./executionState";
import {Ace, Range as AceRange} from "ace-builds";

export abstract class AstNode {
    abstract execute(initialState: ExecutionState): ExecutionState
}

export class Program extends AstNode {
    readonly actions: Action[]

    constructor(actions: Action[]) {
        super();
        this.actions = actions
    }

    execute(initialState: ExecutionState): ExecutionState {
        let counter = 0
        let currentState = initialState
        while (!currentState.isDone) {
            if (counter >= 100_000) {
                throw new Error("Execution needed more than 100,000 steps.")
            }

            currentState = (currentState.nextAction as Action).execute(currentState)
            counter++
        }

        return currentState
    }
}

export abstract class Action extends AstNode {
    readonly location: Ace.Range

    protected constructor(location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super();
        this.location = location
    }
}

export class Literal extends Action {
    private readonly value: RpnValue

    constructor(value: RpnValue, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.value = value
    }

    execute(initialState: ExecutionState): ExecutionState {
        return initialState
            .push(this.value)
            .incrementProgramCounter();
    }
}

export class VariableAccess extends Action {
    readonly name: string
    private readonly type: "boolean" | "number" | "string"

    constructor(name: string, type: "boolean" | "number" | "string", location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.name = name.toUpperCase()
        this.type = type
    }

    execute(initialState: ExecutionState): ExecutionState {
        const value = initialState.variables.read(this.name)
        if (value === undefined) {
            throw new Error(`Unresolved reference to variable ${this.name}.`)
        }
        return initialState
            .push(value)
            .incrementProgramCounter()
    }
}

export class VariableAssignment extends Action {
    readonly name: string
    private readonly type: "boolean" | "number" | "string" | void

    constructor(name: string, type: "boolean" | "number" | "string" | void, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.name = name.toUpperCase()
        this.type = type
    }

    execute(initialState: ExecutionState): ExecutionState {
        const [value, nextState1] = initialState.pop()
        return nextState1
            .writeVariable(this.name, value)
            .incrementProgramCounter()
    }
}

export class Operator extends Action {
    private readonly operator: string

    constructor(operator: string, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.operator = operator
    }

    private static unaryOperator(initialState: ExecutionState, operator: (a: RpnValue) => RpnValue): ExecutionState {
        const [a, nextState1] = initialState.pop()
        return nextState1
            .push(operator(a))
            .incrementProgramCounter()
    }

    private static unaryNumericOperator(initialState: ExecutionState, operator: (a: number) => RpnValue): ExecutionState {
        const [a, nextState1] = initialState.popNumber()
        return nextState1
            .push(operator(a))
            .incrementProgramCounter()
    }

    private static binaryOperator(initialState: ExecutionState, operator: (a: RpnValue, b: RpnValue) => RpnValue): ExecutionState {
        const [b, nextState1] = initialState.pop()
        const [a, nextState2] = nextState1.pop()
        return nextState2
            .push(operator(a, b))
            .incrementProgramCounter()
    }

    private static binaryNumericOperator(initialState: ExecutionState, operator: (a: number, b: number) => number): ExecutionState {
        const [b, nextState1] = initialState.popNumber()
        const [a, nextState2] = nextState1.popNumber()
        return nextState2
            .push(operator(a, b))
            .incrementProgramCounter()
    }

    private static ternaryOperator(initialState: ExecutionState): ExecutionState {
        const [condition, nextState1] = initialState.pop()
        const [falseValue, nextState2] = nextState1.pop()
        const [trueValue, nextState3] = nextState2.pop()
        return nextState3
            .push(condition ? trueValue : falseValue)
            .incrementProgramCounter()
    }

    private static inRange(initialState: ExecutionState): ExecutionState {
        const [value, nextState1] = initialState.pop()
        const [max, nextState2] = nextState1.pop()
        const [min, nextState3] = nextState2.pop()
        return nextState3
            .push(min <= value && value <= max)
            .incrementProgramCounter()
    }

    private static caseOperator(initialState: ExecutionState): ExecutionState {
        const [condition, nextState1] = initialState.popNumber()
        const [count, nextState2] = nextState1.popNumber()
        let currentState = nextState2
        const values = []
        for (let i = 0; i < count; i++) {
            const [value, nextState] = currentState.pop()
            values.push(value)
            currentState = nextState
        }

        const index = Math.floor(condition)
        if (values[index] === undefined) {
            throw new Error("Case index out of bounds.")
        }

        return currentState
            .push(values[index])
            .incrementProgramCounter()
    }

    private static charAt(initialState: ExecutionState): ExecutionState {
        const [b, nextState1] = initialState.popNumber()
        const [a, nextState2] = nextState1.pop()
        return nextState2
            .push(`${a}`.charAt(b))
            .incrementProgramCounter()
    }

    private static clearStack(initialState: ExecutionState): ExecutionState {
        return initialState
            .clearStack()
            .incrementProgramCounter()
    }

    private static duplicate(initialState: ExecutionState): ExecutionState {
        const topValue = initialState.stack.peek()
        if (topValue === null || topValue === undefined) {
            throw new Error("Stack is depleted.")
        }
        return initialState
            .push(topValue)
            .incrementProgramCounter()
    }

    private static discard(initialState: ExecutionState): ExecutionState {
        return initialState
            .pop()[1]
            .incrementProgramCounter()
    }

    private static reverse(initialState: ExecutionState): ExecutionState {
        const [b, nextState1] = initialState.popNumber()
        const [a, nextState2] = nextState1.popNumber()
        const nextState3 = nextState2.push(a)
        return nextState3
            .push(b)
            .incrementProgramCounter()
    }

    execute(initialState: ExecutionState): ExecutionState {
        switch (this.operator) {

            // Common operators
            case "+":
                return Operator.binaryNumericOperator(initialState, (a, b) => a + b)
            case "-":
                return Operator.binaryNumericOperator(initialState, (a, b) => a - b)
            case "/":
                return Operator.binaryNumericOperator(initialState, (a, b) => a / b)
            case "*":
                return Operator.binaryNumericOperator(initialState, (a, b) => a * b)
            case "%":
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.abs(a) % Math.abs(b))
            case "++":
                return Operator.unaryNumericOperator(initialState, a => a + 1)
            case "--":
                return Operator.unaryNumericOperator(initialState, a => a - 1)
            case "/-/":
            case "neg":
                return Operator.unaryNumericOperator(initialState, a => -a)

            // Comparison operators
            case "==":
                return Operator.binaryOperator(initialState, (a, b) => a === b)
            case "!=":
                return Operator.binaryOperator(initialState, (a, b) => a !== b)
            case ">":
                return Operator.binaryOperator(initialState, (a, b) => a > b)
            case "<":
                return Operator.binaryOperator(initialState, (a, b) => a < b)
            case ">=":
                return Operator.binaryOperator(initialState, (a, b) => a >= b)
            case "<=":
                return Operator.binaryOperator(initialState, (a, b) => a <= b)
            case "?":
                return Operator.ternaryOperator(initialState)

            // Bitwise operators
            case '&':
                return Operator.binaryNumericOperator(initialState, (a, b) => a & b)
            case '|':
                return Operator.binaryNumericOperator(initialState, (a, b) => a | b)
            case '^':
                return Operator.binaryNumericOperator(initialState, (a, b) => a ^ b)
            case '~':
                return Operator.unaryNumericOperator(initialState, a => ~a)
            case '>>':
                return Operator.binaryNumericOperator(initialState, (a, b) => a >> b)
            case '<<':
                return Operator.binaryNumericOperator(initialState, (a, b) => a << b)

            // Logical operators
            case '!':
            case 'NOT':
                return Operator.unaryOperator(initialState, a => !a)
            case '&&':
            case 'AND':
                return Operator.binaryOperator(initialState, (a, b) => a && b)
            case '||':
            case 'OR':
                return Operator.binaryOperator(initialState, (a, b) => a || b)

            // Numerical operator
            case 'abs':
                return Operator.unaryNumericOperator(initialState, a => Math.abs(a))
            case 'int':
            case 'flr':
                return Operator.unaryNumericOperator(initialState, a => Math.floor(a))
            case 'rng':
                return Operator.inRange(initialState)
            case 'cos':
                return Operator.unaryNumericOperator(initialState, a => Math.cos(a))
            case 'lg':
                return Operator.unaryNumericOperator(initialState, a => Math.log10(a))
            case 'min':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.min(a, b))
            case 'sin':
                return Operator.unaryNumericOperator(initialState, a => Math.sin(a))
            case 'acos':
                return Operator.unaryNumericOperator(initialState, a => Math.acos(a))
            case 'ctg':
                return Operator.unaryNumericOperator(initialState, a => 1 / Math.tan(a))
            case 'ln':
                return Operator.unaryNumericOperator(initialState, a => Math.log(a))
            case 'sqr':
                return Operator.unaryNumericOperator(initialState, a => a * a)
            case 'asin':
                return Operator.unaryNumericOperator(initialState, a => Math.asin(a))
            case 'eps':
                throw new Error("Not implemented.") // TODO
            case 'log':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.log(a) / Math.log(b))
            case 'pi':
                return initialState.push(Math.PI)
            case 'sqrt':
                return Operator.unaryNumericOperator(initialState, (a) => Math.sqrt(a))
            case 'atg2':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.atan2(a, b))
            case 'exp':
                return Operator.unaryNumericOperator(initialState, (a) => Math.exp(a))
            case 'max':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.max(a, b))
            case 'pow':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.pow(a, b))
            case 'tg':
                return Operator.unaryNumericOperator(initialState, a => Math.tan(a))
            case 'atg':
                return Operator.unaryNumericOperator(initialState, a => Math.atan(a))
            case 'div':
                return Operator.binaryNumericOperator(initialState, (a, b) => Math.floor(a / b))
            case 'ceil':
                return Operator.unaryNumericOperator(initialState, a => Math.ceil(a))
            case 'near':
                return Operator.unaryNumericOperator(initialState, a => Math.round(a))

            // Special operators
            case 'dnor':
            case 'd360':
            case 'rdeg':
                return Operator.unaryNumericOperator(initialState, a => (a % 360 + 360) % 360)
            case 'rddg':
                return Operator.unaryNumericOperator(initialState, a => a * 180 / Math.PI)
            case 'dgrd':
                return Operator.unaryNumericOperator(initialState, a => a * Math.PI / 180)
            case 'rnor':
                return Operator.unaryNumericOperator(initialState, a => (a % (2 * Math.PI) + (2 * Math.PI)) % (2 * Math.PI))
            case 'case':
                return Operator.caseOperator(initialState)

            // String operators
            case 'lc':
                return Operator.unaryOperator(initialState, a => `${a}`.toLowerCase())
            case 'uc':
            case 'cap':
                return Operator.unaryOperator(initialState, a => `${a}`.toUpperCase())
            case 'chr':
                return Operator.unaryNumericOperator(initialState, a => String.fromCharCode(a))
            case 'ord':
                return Operator.unaryOperator(initialState, a => `${a}`.charCodeAt(0))
            case 'scat':
                return Operator.binaryOperator(initialState, (a, b) => `${a}${b}`)
            case 'schr':
                return Operator.binaryOperator(initialState, (a, b) => `${b}`.indexOf(`${a}`))
            case 'scmp':
                return Operator.binaryOperator(initialState, (a, b) => `${a}`.localeCompare(`${b}`))
            case 'scmi':
                return Operator.binaryOperator(initialState, (a, b) => `${a}`.toLowerCase().localeCompare(`${b}`.toLowerCase()))
            case 'sstr':
                return Operator.binaryOperator(initialState, (a, b) => `${b}`.indexOf(`${a}`))
            case 'ssub':
                return Operator.binaryOperator(initialState, (a, b) => `${b}`.replace(`${a}`, ""))
            case 'symb':
                return Operator.charAt(initialState)

            // Stack operators
            case 'b':
                throw new Error("Not implemented.") // TODO
            case 'c':
                return Operator.clearStack(initialState)
            case 'd':
                return Operator.duplicate(initialState)
            case 'p':
                return Operator.discard(initialState)
            case 'r':
                return Operator.reverse(initialState)

            default:
                throw new Error(`Unknown operator ${this.operator}`)
        }
    }
}

export class JumpIfFalse extends Action {
    readonly newProgramCounter: number;

    constructor(newProgramCounter: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.newProgramCounter = newProgramCounter
    }

    execute(initialState: ExecutionState): ExecutionState {
        const [value, nextState1] = initialState.pop()

        if (value) {
            return nextState1.incrementProgramCounter()
        } else {
            return nextState1.jump(this.newProgramCounter)
        }
    }
}

export class Jump extends Action {
    readonly newProgramCounter: number;

    constructor(newProgramCounter: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.newProgramCounter = newProgramCounter
    }

    execute(initialState: ExecutionState): ExecutionState {
        return initialState.jump(this.newProgramCounter)
    }
}

export class Label extends Action {
    readonly index: number;

    constructor(index: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.index = index
    }

    execute(initialState: ExecutionState): ExecutionState {
        return initialState.incrementProgramCounter()
    }
}

export class Goto extends Action {
    readonly index: number;

    constructor(index: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.index = index
    }

    execute(initialState: ExecutionState): ExecutionState {
        const newProgramCounter = initialState.program.actions.findIndex(it => it instanceof Label && it.index === this.index)
        return initialState.jump(newProgramCounter)
    }
}

export class Quit extends Action {
    constructor(location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
    }

    execute(initialState: ExecutionState): ExecutionState {
        return initialState.jump(-1);
    }
}

export class Store extends Action {
    readonly index: number;

    constructor(index: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.index = index
    }

    execute(initialState: ExecutionState): ExecutionState {
        const value = initialState.stack.peek()
        if (value === null || value === undefined) {
            throw new Error("Stack is depleted.")
        }
        return initialState
            .writeRegister(this.index, value)
            .incrementProgramCounter()
    }
}

export class Load extends Action {
    readonly index: number;

    constructor(index: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.index = index
    }

    execute(initialState: ExecutionState): ExecutionState {
        const value = initialState.registers.read(this.index)

        return initialState
            .push(value)
            .incrementProgramCounter()
    }
}

export class StorePop extends Action {
    readonly index: number;

    constructor(index: number, location: Ace.Range = new AceRange(0, 0, 0, 0)) {
        super(location);
        this.index = index
    }

    execute(initialState: ExecutionState): ExecutionState {
        const [value, nextState1] = initialState.pop()

        return nextState1
            .writeRegister(this.index, value)
            .incrementProgramCounter()
    }
}
