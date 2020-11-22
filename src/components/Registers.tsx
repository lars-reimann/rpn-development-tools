import React from "react";
import './Registers.css';
import {ExternalValue} from "../model/externalValue";
import ExternalValueIO from "./ExternalValueIO";

export default function Registers(props: {
    disabled: boolean,
    registers: ExternalValue[],
    onChange: (newValue: ExternalValue) => void
}) {
    return (
        <div className="Registers">
            <h2>Registers</h2>
            {props.registers.map((register, index) =>
                <ExternalValueIO key={index} value={register} disabled={props.disabled} onChange={props.onChange}/>
            )}
        </div>
    )
}