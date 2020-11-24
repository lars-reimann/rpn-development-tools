import {List, OrderedMap} from "immutable";

export type RpnValue = boolean | number | string

export class ExecutionState {
    readonly stack: Stack
    readonly variables: Variables
    readonly registers: Registers

    constructor(
        stack: Stack = new Stack(),
        variables: Variables = new Variables(),
        registers: Registers = new Registers()
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

    writeRegister(index: number, newValue: string): ExecutionState {
        return this.copy({registers: this.registers.write(index, newValue)})
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

export class Variables {
    readonly variables: OrderedMap<string, RpnValue>

    constructor(variables: OrderedMap<string, RpnValue> | Iterable<[string, RpnValue]> = []) {
        if (variables instanceof OrderedMap) {
            this.variables = variables as OrderedMap<string, RpnValue>
        } else {
            this.variables = OrderedMap(variables)
        }
    }

    read(name: string): RpnValue | undefined {
        return this.variables.get(name)
    }

    write(name: string, newValue: string): Variables {
        return new Variables(this.variables.set(name, newValue))
    }
}

export class Registers {
    readonly registers: List<RpnValue>

    constructor(registers: List<RpnValue> | Iterable<RpnValue> = []) {
        if (registers instanceof List) {
            this.registers = (registers as List<RpnValue>).setSize(50)
        } else {
            this.registers = List(registers).setSize(50)
        }
    }

    read(index: number): RpnValue | undefined {
        if (index < 0 || 49 < index) {
            throw new Error("Register index out of bounds.")
        }

        return this.registers.get(index)
    }

    write(index: number, newValue: string): Registers {
        if (index < 0 || 49 < index) {
            throw new Error("Register index out of bounds.")
        }

        return new Registers(this.registers.set(index, newValue))
    }
}