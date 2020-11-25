import React from "react";
import './Controls.css';

export default function Controls(props: {
    canUndo: boolean,
    isExecuting: boolean,
    onNextStep: () => void,
    onPreviousStep: () => void,
    onRestoreInitialExternalValues: () => void,
    onRunProgram: () => void,
    onToggleStepwiseExecution: () => void,
    onUpdateVariables: () => void,
}) {

    if (props.isExecuting) {
        return (
            <div className="Controls">
                <div className="align-left">
                    <button type="button" onClick={props.onPreviousStep} disabled={!props.canUndo}>Previous step</button>
                    <button type="button" onClick={props.onNextStep}>Next step</button>
                    <button type="button" onClick={props.onToggleStepwiseExecution}>Stop stepwise execution</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className="Controls">
                <div className="align-left">
                    <button type="button" onClick={props.onRunProgram}>Run entire program</button>
                    <button type="button" onClick={props.onToggleStepwiseExecution}>Start stepwise execution</button>
                </div>
                <div className="align-right">
                    <button type="button" onClick={props.onUpdateVariables}>Update variables</button>
                    <button type="button" onClick={props.onRestoreInitialExternalValues} disabled={!props.canUndo}>Restore state before last run</button>
                </div>
            </div>
        )
    }
}