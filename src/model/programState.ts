export type RpnValue = boolean | number | string

export class ProgramState {
    private readonly stack: Stack

    constructor(stack: Stack) {
        this.stack = stack
    }

    copy({stack = this.stack} = {}): ProgramState {
        return new ProgramState(stack)
    }

    push(value: RpnValue): ProgramState {
        return this.copy({stack: this.stack.push(value)})
    }
}

export class Stack {
    private readonly stack: RpnValue[]

    constructor(stack: RpnValue[]) {
        this.stack = [...stack]
    }

    push(value: RpnValue): Stack {
        return new Stack([...this.stack, value])
    }
}