import React from "react";
import './Stack.css';

export default function Stack(props: {
    values: Array<any>
}) {
    return (
        <div className="Stack">
            <h2>Stack</h2>
            <main className="StackItems">{props.values.map(value => <StackItem value={value}/>)}</main>
        </div>
    )
}

function StackItem(props: {
    value: any
}) {
    return (
        <div className="StackItem">
            {props.value}
        </div>
    )
}