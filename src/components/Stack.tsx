import React from "react";
import './Stack.css';
import {RpnValue, StackState} from "../model/executionState";
import {rpnValueToString} from "../utils/utils";

export default function Stack(props: { stack: StackState }) {
    return (
        <div className="Stack">
            <h2>Stack</h2>
            <main className="StackItems">{props.stack.stack.map((value, index) =>
                <StackItem key={index} value={value}/>
            )}</main>
        </div>
    )
}

function StackItem(props: { value: RpnValue }) {
    return (
        <div className="StackItem">
            {rpnValueToString(props.value)}
        </div>
    )
}