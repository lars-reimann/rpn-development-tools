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

    execute(initialState: ProgramState): ProgramState {
        switch (this.operator) {
            case "+":
                const [b, nextState1] = initialState.popNumberOrThrow()
                const [a, nextState2] = nextState1.popNumberOrThrow()
                return nextState2.push(a + b)
            default:
                return initialState
        }
    }
}
