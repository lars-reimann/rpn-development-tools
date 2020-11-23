import {ProgramState, RpnValue} from "./programState";

export abstract class AstNode {
    abstract execute(initialState: ProgramState): ProgramState
}

export class Program extends AstNode {
    private readonly actions: Action[]

    constructor(actions: Action[]) {
        super();
        this.actions = actions
    }

    execute(initialState: ProgramState): ProgramState {
        return this.actions.reduce(
            (previousState: ProgramState, action: Action) => action.execute(previousState),
            initialState
        )
    }
}

export abstract class Action extends AstNode {
}

export class Literal extends Action {
    private readonly value: RpnValue

    constructor(value: RpnValue) {
        super();
        this.value = value
    }

    execute(initialState: ProgramState): ProgramState {
        return initialState.push(this.value);
    }
}

export class Operator extends Action {
    private readonly operator: string

    constructor(operator: string) {
        super();
        this.operator = operator
    }

    private static unaryOperator(initialState: ProgramState, operator: (a: RpnValue) => RpnValue): ProgramState {
        const [a, nextState1] = initialState.pop()
        return nextState1.push(operator(a))
    }

    private static unaryNumericOperator(initialState: ProgramState, operator: (a: number) => RpnValue): ProgramState {
        const [a, nextState1] = initialState.popNumber()
        return nextState1.push(operator(a))
    }

    private static binaryOperator(initialState: ProgramState, operator: (a: RpnValue, b: RpnValue) => RpnValue): ProgramState {
        const [b, nextState1] = initialState.pop()
        const [a, nextState2] = nextState1.pop()
        return nextState2.push(operator(a, b))
    }

    private static binaryNumericOperator(initialState: ProgramState, operator: (a: number, b: number) => number): ProgramState {
        const [b, nextState1] = initialState.popNumber()
        const [a, nextState2] = nextState1.popNumber()
        return nextState2.push(operator(a, b))
    }

    private static ternaryOperator(initialState: ProgramState): ProgramState {
        const [condition, nextState1] = initialState.pop()
        const [falseValue, nextState2] = nextState1.pop()
        const [trueValue, nextState3] = nextState2.pop()
        return nextState3.push(condition ? trueValue : falseValue)
    }

    private static inRange(initialState: ProgramState): ProgramState {
        const [value, nextState1] = initialState.pop()
        const [max, nextState2] = nextState1.pop()
        const [min, nextState3] = nextState2.pop()
        return nextState3.push(min <= value && value <= max)
    }

    private static charAt(initialState: ProgramState): ProgramState {
        const [b, nextState1] = initialState.popNumber()
        const [a, nextState2] = nextState1.pop()
        return nextState2.push(`${a}`.charAt(b))
    }

    execute(initialState: ProgramState): ProgramState {
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
                throw new Error("Not implemented.") // TODO

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
                throw new Error("Not implemented.") // TODO
            case 'scmp':
                return Operator.binaryOperator(initialState, (a, b) => `${a}` === `${b}`)
            case 'scmi':
                return Operator.binaryOperator(initialState, (a, b) => `${a}`.toLowerCase() === `${b}`.toLowerCase())
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
                throw new Error("Not implemented.") // TODO
            case 'd':
                throw new Error("Not implemented.") // TODO
            case 'p':
                throw new Error("Not implemented.") // TODO
            case 'r':
                throw new Error("Not implemented.") // TODO

            default:
                return initialState
        }
    }
}
