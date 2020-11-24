import React from "react";
import './Registers.css';
import {Registers as ModelRegisters, RpnValue} from "../model/executionState";

export default function Registers(props: { registers: ModelRegisters, }) {
    return (
        <div className="Registers">
            <h2>Registers</h2>
            <div className="RegisterItems">
                <table>
                    <thead>
                    <tr>
                        <th>Index</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.registers.registers.map((register, index) =>
                        <Register key={index} index={index} value={register}/>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function Register(props: {
    index: number,
    value: RpnValue,
}) {
    return (
        <tr className="Register">
            <td className="label">{props.index}</td>
            <td className="value">{`${props.value}`}</td>
        </tr>
    )
}