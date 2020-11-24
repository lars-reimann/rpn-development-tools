import {List} from "immutable";

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

    pop(): [value: RpnValue, newProgramState: ProgramState]{
        const value = this.stack.last()
        const newStack = this.stack.pop()
        if (value === null || value === undefined) {
            throw new Error("Stack is depleted.")
        }
        return [
            value,
            this.copy({stack: newStack})
        ]
    }

    popNumber(): [value: number, newProgramState: ProgramState] {
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

    clearStack(): ProgramState {
        return this.copy({stack: this.stack.clear()})
    }
}

export class Stack {
    readonly stack: List<RpnValue>

    constructor(stack: RpnValue[] | List<RpnValue>) {
        if (Array.isArray(stack)) {
            this.stack = List(stack)
        } else {
            this.stack = stack
        }
    }

    last(): RpnValue | undefined {
        return this.stack.last()
    }

    push(value: RpnValue): Stack {
        return new Stack(this.stack.push(value))
    }

    pop(): Stack {
        return new Stack(this.stack.pop())
    }

    clear(): Stack {
        return new Stack(this.stack.clear())
    }
}