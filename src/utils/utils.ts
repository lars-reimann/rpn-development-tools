import {RpnValue} from "../model/executionState";

export function rpnValueToString(value: RpnValue | void) {
    switch (value) {
        case true:
            return  "True"
        case false:
            return  "False"
        case undefined:
            return  ""
        default:
            return  "" + value
    }
}
