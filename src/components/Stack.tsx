import React from "react";
import './Stack.css';
import {RpnValue} from "../model/programState";

export default function Stack(props: { values: RpnValue[] }) {
    return (
        <div className="Stack">
            <h2>Stack</h2>
            <main className="StackItems">{props.values.map((value, index) =>
                <StackItem key={index} value={value}/>
            )}</main>
        </div>
    )
}

function StackItem(props: { value: RpnValue }) {
    return (
        <div className="StackItem">
            {props.value.toString()}
        </div>
    )
}