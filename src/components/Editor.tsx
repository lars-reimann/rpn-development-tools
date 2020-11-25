import React, {useEffect, useRef} from "react";
import AceEditor from "react-ace";
import './Editor.css';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";
import {Range} from "ace-builds";

export default function Editor(props: {
    content: string,
    onChange: (newContent: string) => void
    isExecuting: boolean
}) {
    const ace = useRef(null)

    useEffect(() => {
        const textarea = document.querySelector("#rpn-editor textarea") as HTMLTextAreaElement
        textarea.disabled = props.isExecuting
    })

    useEffect(() => {

        // @ts-ignore
        const editor = ace.current.editor
        const range = new Range(0, 0, 0, 10);
        const marker = editor.getSession().addMarker(range, "ace_selected-word", "text");

        return () => {
            editor.getSession().removeMarker(marker)
        }
    })

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
