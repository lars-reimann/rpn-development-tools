import {RpnValue} from "./programState";

export interface ExternalValue {
    name: string
    value: RpnValue
}

export class ExternalBoolean implements ExternalValue {
    name: string
    value: boolean

    constructor(name: string, value: boolean) {
        this.name = name
        this.value = value
    }

    copy(newValue: boolean) {
        return new ExternalBoolean(this.name, newValue)
    }
}

export class ExternalNumber implements ExternalValue {
    name: string
    value: number

    constructor(name: string, value: number) {
        this.name = name
        this.value = value
    }

    copy(newValue: number) {
        return new ExternalNumber(this.name, newValue)
    }
}

export class ExternalString implements ExternalValue {
    name: string
    value: string

    constructor(name: string, value: string) {
        this.name = name
        this.value = value
    }

    copy(newValue: string) {
        return new ExternalString(this.name, newValue)
    }
}

/**
 * An external value (simvar/register) that is written by the program but not read.
 */
export class ExternalWriteOnlyValue implements ExternalValue {
    name: string
    value: string

    constructor(name: string, value: string) {
        this.name = name
        this.value = value
    }
}