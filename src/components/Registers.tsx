import React from "react";
import './Registers.css';
import {ExternalValue} from "../model/externalValue";
import ExternalValueIO from "./ExternalValueIO";

export default function Registers(props: {
    registers: ExternalValue[],
    onChange: (newValue: ExternalValue) => void
}) {
    return (
        <div className="Registers">
            <h2>Registers</h2>
            {props.registers.map((register, index) =>
                <ExternalValueIO key={index} value={register} onChange={props.onChange}/>
            )}
        </div>
    )
}