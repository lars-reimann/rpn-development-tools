import React from "react";
import './SimVars.css';
import {ExternalValue} from "../model/externalValue";
import ExternalValueIO from "./ExternalValueIO";

export default function SimVars(props: {
    disabled: boolean,
    simVars: ExternalValue[],
    onChange: (newValue: ExternalValue) => void
}) {
    return (
        <div className="SimVars">
            <h2>SimVars</h2>
            {props.simVars.map((simVar, index) =>
                <ExternalValueIO key={index} value={simVar} disabled={props.disabled} onChange={props.onChange}/>
            )}
        </div>
    )
}
