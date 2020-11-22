import React from "react";
import './Controls.css';

export default function Controls(props: {
    isExecuting: boolean,
    onClearStack: () => void,
    onNextStep: () => void,
    onToggleExecuting: () => void,
}) {

    if (props.isExecuting) {
        return (
            <div className="Controls">
                <button type="button" onClick={props.onNextStep}>Next step</button>
                <button type="button" onClick={props.onToggleExecuting}>Stop execution</button>
            </div>
        )
    } else {
        return (
            <div className="Controls">
                <button type="button" onClick={props.onClearStack}>Clear stack</button>
                <button type="button" onClick={props.onToggleExecuting}>Start execution</button>
            </div>
        )
    }
}