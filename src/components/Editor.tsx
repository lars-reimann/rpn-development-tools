import React, {useEffect, useState} from "react";
import AceEditor from "react-ace";
import './Editor.css';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";

export default function Editor(props: {
    content: string,
    onChange: (newContent: string) => void
    isExecuting: boolean
}) {
    useEffect(() => {
        const textarea = document.querySelector("#rpn-editor textarea") as HTMLTextAreaElement
        textarea.disabled = props.isExecuting
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
            />,
        </div>
    )
}
