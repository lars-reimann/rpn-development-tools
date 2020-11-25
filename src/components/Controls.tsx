import React from "react";
import './Controls.css';

export default function Controls(props: {
    isExecuting: boolean,
    onClearStack: () => void,
    onNextStep: () => void,
    onRestoreInitialExternalValues: () => void,
    onRunProgram: () => void,
    onToggleStepwiseExecution: () => void,
}) {

    if (props.isExecuting) {
        return (
            <div className="Controls">
                <button type="button" onClick={props.onNextStep}>Next step</button>
                <button type="button" onClick={props.onToggleStepwiseExecution}>Stop stepwise execution</button>
            </div>
        )
    } else {
        return (
            <div className="Controls">
                <div className="alignLeft">
                    <button type="button" onClick={props.onRunProgram}>Run program</button>
                    <button type="button" onClick={props.onToggleStepwiseExecution}>Start stepwise execution</button>
                </div>
                <div className="alignRight">
                    <button type="button" onClick={props.onClearStack}>Clear stack</button>
                    <button type="button" onClick={props.onRestoreInitialExternalValues}>Restore initial variables/registers</button>
                </div>
            </div>
        )
    }
}