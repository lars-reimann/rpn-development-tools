import React from "react";
import './Variables.css';
import {ExternalValue} from "../model/externalValue";
import ExternalValueIO from "./ExternalValueIO";

export default function Variables(props: {
    disabled: boolean,
    variables: ExternalValue[],
    onChange: (newValue: ExternalValue) => void
}) {
    return (
        <div className="Variables">
            <h2>Variables</h2>
            {props.variables.map((variable, index) =>
                <ExternalValueIO key={index} value={variable} disabled={props.disabled} onChange={props.onChange}/>
            )}
        </div>
    )
}
