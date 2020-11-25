import {List, OrderedMap} from "immutable";
import {Action, Program} from "./astNodes";

export type RpnValue = boolean | number | string

export class ExecutionState {
    readonly stack: StackState
    readonly variables: VariablesState
    readonly registers: RegistersState
    readonly program: Program
    readonly programCounter: number

    constructor(
        stack: StackState = new StackState(),
        variables: VariablesState = new VariablesState(),
        registers: RegistersState = new RegistersState(),
        program: Program = new Program([]),
        programCounter: number = 0
    ) {
        this.stack = stack
        this.variables = variables
        this.registers = registers
        this.program = program
        this.programCounter = programCounter
    }

    get nextAction(): Action {
        return this.program.actions[this.programCounter]
    }

    get isDone(): boolean {
        return this.nextAction === undefined
    }

    copy({
             stack = this.stack,
             variables = this.variables,
             registers = this.registers,
             program = this.program,
             programCounter = this.programCounter
         } = {}
    ): ExecutionState {
        return new ExecutionState(stack, variables, registers, program, programCounter)
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

    writeVariable(name: string, newValue: RpnValue): ExecutionState {
        return this.copy({variables: this.variables.write(name, newValue)})
    }

    writeRegister(index: number, newValue: RpnValue): ExecutionState {
        return this.copy({registers: this.registers.write(index, newValue)})
    }

    jump(newProgramCounter: number): ExecutionState {
        return this.copy({programCounter: newProgramCounter})
    }

    incrementProgramCounter(): ExecutionState {
        return this.copy({programCounter: this.programCounter + 1})
    }
}

export class StackState {
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

    push(value: RpnValue): StackState {
        return new StackState(this.stack.push(value))
    }

    pop(): StackState {
        return new StackState(this.stack.pop())
    }

    clear(): StackState {
        return new StackState(this.stack.clear())
    }
}

export class VariablesState {
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

    write(name: string, newValue: RpnValue): VariablesState {
        return new VariablesState(this.variables.set(name, newValue))
    }
}

export class RegistersState {
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

    write(index: number, newValue: RpnValue): RegistersState {
        if (index < 0 || 49 < index) {
            throw new Error("Register index out of bounds.")
        }

        return new RegistersState(this.registers.set(index, newValue))
    }
}