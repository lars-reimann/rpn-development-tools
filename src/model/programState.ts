export type RpnValue = boolean | number | string

export class ProgramState {
    readonly stack: Stack

    constructor(stack: Stack) {
        this.stack = stack
    }

    copy({stack = this.stack} = {}): ProgramState {
        return new ProgramState(stack)
    }

    push(value: RpnValue): ProgramState {
        return this.copy({stack: this.stack.push(value)})
    }

    pop(): [value: RpnValue | void, newProgramState: ProgramState]{
        const [value, newStack] = this.stack.pop()
        return [
            value,
            this.copy({stack: newStack})
        ]
    }

    popNumberOrThrow(): [value: number, newProgramState: ProgramState] {
        const [value, newProgramState] = this.pop()
        if (value === null || value === undefined) {
            throw new Error("Stack is depleted.")
        } else if (typeof value !== "number") {
            throw new Error("Value is not a number.")
        }

        return [
            value,
            newProgramState
        ]
    }
}

export class Stack {
    readonly stack: RpnValue[]

    constructor(stack: RpnValue[]) {
        this.stack = [...stack]
    }

    push(value: RpnValue): Stack {
        return new Stack([...this.stack, value])
    }

    pop(): [ value: RpnValue | void, newStack: Stack ] {
        const newStack = [...this.stack]
        const value = newStack.pop()

        return [
            value,
            new Stack(newStack)
        ]
    }
}