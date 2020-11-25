import React, {useEffect, useRef} from "react";
import AceEditor from "react-ace";
import './Editor.css';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";
import {Action} from "../model/astNodes";

export default function Editor(props: {
    content: string,
    currentAction: Action | undefined,
    isExecuting: boolean
    onChange: (newContent: string) => void
}) {
    const ace = useRef(null)

    useEffect(() => {
        const textarea = document.querySelector("#rpn-editor textarea") as HTMLTextAreaElement
        textarea.disabled = props.isExecuting
    }, [props.isExecuting])

    useEffect(() => {
        if (props.isExecuting && props.currentAction !== undefined) {

            // @ts-ignore
            const editor = ace.current.editor
            const range = props.currentAction.location

            const marker = editor.getSession().addMarker(range, "ace_selected-word", "text");

            return () => {
                editor.getSession().removeMarker(marker)
            }
        }
    }, [props.isExecuting, props.currentAction])

    return (
        <div className={`Editor ${props.isExecuting ? "disabled" : ""}`}>
            <AceEditor
                mode="text"
                name="rpn-editor"
                theme="github"

                fontSize="20px"
                height="100%"
                width="100%"

                editorProps={{$blockScrolling: true}}
                readOnly={props.isExecuting}
                showPrintMargin={false}

                onChange={props.onChange}
                value={props.content}

                ref={ace}
            />,
        </div>
    )
}
