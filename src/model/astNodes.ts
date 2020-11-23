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

    constructor(value: number) {
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

    private static unaryNumericOperator(initialState: ProgramState, operator: (a: number) => number): ProgramState {
        const [a, nextState1] = initialState.popNumberOrThrow()
        return nextState1.push(operator(a))
    }

    private static binaryNumericOperator(initialState: ProgramState, operator: (a: number, b: number) => number): ProgramState {
        const [b, nextState1] = initialState.popNumberOrThrow()
        const [a, nextState2] = nextState1.popNumberOrThrow()
        return nextState2.push(operator(a, b))
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
                return Operator.unaryNumericOperator(initialState, (a) => a + 1)
            case "--":
                return Operator.unaryNumericOperator(initialState, (a) => a - 1)
            case "/-/":
            case "neg":
                return Operator.unaryNumericOperator(initialState, (a) => -a)
            default:
                return initialState
        }
    }
}
