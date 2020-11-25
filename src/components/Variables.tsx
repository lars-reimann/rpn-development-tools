import React from "react";
import './Variables.css';
import {RpnValue, VariablesState} from "../model/executionState";
import {rpnValueToString} from "../utils/utils";

export default function Variables(props: {
    isExecuting: boolean,
    variables: VariablesState,
    onChange: (name: string, newValue: string) => void
}) {
    return (
        <div className="Variables">
            <h2>Variables</h2>
            <div className="VariableItems">
                {props.variables.variables.map((variable, name) =>
                    <Variable key={name}
                              name={name}
                              value={variable}
                              isDisabled={props.isExecuting}
                              onChange={props.onChange}
                    />
                ).toList()}
            </div>
        </div>
    )
}

function Variable(props: {
    isDisabled: boolean,
    name: string,
    value: RpnValue | void,
    onChange: (name: string, newValue: string) => void
}) {
    let input = <input
        id={props.name}
        type="text"
        disabled={props.isDisabled}
        value={rpnValueToString(props.value)}
        onChange={event => props.onChange(props.name, event.target.value)}
    />

    return (
        <div className="Variable">
            <label htmlFor={props.name}>{props.name}:</label>
            {input}
        </div>
    )
}