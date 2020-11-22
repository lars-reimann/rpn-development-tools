import React from "react";
import {
    ExternalBoolean,
    ExternalNumber,
    ExternalString,
    ExternalValue,
    ExternalWriteOnlyValue
} from "../model/externalValue";
import "./ExternalValueIO.css"

export default function ExternalValueIO(props: {
    value: ExternalValue,
    onChange: (newValue: ExternalValue) => void
}) {
    const value = props.value

    let input
    if (value instanceof ExternalBoolean) {
        input = <input
            id={value.name}
            type="checkbox"
            checked={value.value}
            onChange={event => props.onChange(value.copy(event.target.checked))}
        />
    } else if (value instanceof ExternalNumber) {
        input = <input
            id={value.name}
            type="number"
            value={value.value}
            onChange={event => props.onChange(value.copy(event.target.valueAsNumber))}
        />
    } else if (value instanceof ExternalString) {
        input = <input
            id={value.name}
            type="text"
            value={value.value}
            onChange={event => props.onChange(value.copy(event.target.value))}
        />
    } else if (value instanceof ExternalWriteOnlyValue) {
        input = <input id={value.name} type="text" disabled={true} value={value.value}/>
    }

    return (
        <div className="ExternalValueIO">
            <label htmlFor={value.name}>{value.name}:</label>
            {input}
        </div>
    )
}