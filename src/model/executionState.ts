import {List, OrderedMap} from "immutable";

export type RpnValue = boolean | number | string

export class ExecutionState {
    readonly stack: Stack
    readonly variables: ExternalState
    readonly registers: ExternalState

    constructor(
        stack: Stack = new Stack(),
        variables: ExternalState = new ExternalState(),
        registers: ExternalState = new ExternalState()
    ) {
        this.stack = stack
        this.variables = variables
        this.registers = registers
    }

    copy({stack = this.stack, variables = this.variables, registers = this.registers} = {}): ExecutionState {
        return new ExecutionState(stack, variables, registers)
    }

    push(value: RpnValue): ExecutionState {
        return this.copy({stack: this.stack.push(value)})
    }

    pop(): [value: RpnValue, newProgramState: ExecutionState] {
        const value = this.stack.peek()
        const newStack = this.stack.pop()
        if (value === null || value === undefined) {
            throw new Error("Stack is depleted.")
        }
        return [
            value,
            this.copy({stack: newStack})
        ]
    }

    popNumber(): [value: number, newProgramState: ExecutionState] {
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

    clearStack(): ExecutionState {
        return this.copy({stack: this.stack.clear()})
    }

    writeVariable(name: string, newValue: string): ExecutionState {
        return this.copy({variables: this.variables.write(name, newValue)})
    }

    writeRegister(name: string, newValue: string): ExecutionState {
        return this.copy({registers: this.registers.write(name, newValue)})
    }
}

export class Stack {
    readonly stack: List<RpnValue>

    constructor(stack: List<RpnValue> | Iterable<RpnValue> = []) {
        if (stack instanceof List) {
            this.stack = stack as List<RpnValue>
        } else {
            this.stack = List(stack)
        }
    }

    peek(): RpnValue | undefined {
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

export class ExternalState {
    readonly entries: OrderedMap<string, RpnValue>

    constructor(entries: OrderedMap<string, RpnValue> | Iterable<[string, RpnValue]> = []) {
        if (entries instanceof OrderedMap) {
            this.entries = entries as OrderedMap<string, RpnValue>
        } else {
            this.entries = OrderedMap(entries)
        }
    }

    read(name: string): RpnValue | undefined {
        return this.entries.get(name)
    }

    write(name: string, newValue: string): ExternalState {
        return new ExternalState(this.entries.set(name, newValue))
    }
}
