import React, {useState} from "react";
import AceEditor from "react-ace";
import './Editor.css';

import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-github";

export default function Editor(props: {
    codeIsRunning: boolean,
    content: string,
    onChange: (newContent: string) => void
}) {
    return (
        <div className="Editor">
            <AceEditor
                mode="text"
                name="rpn-editor"
                theme="github"

                fontSize="20px"
                height="100%"
                width="100%"

                editorProps={{$blockScrolling: true}}
                readOnly={props.codeIsRunning}
                showPrintMargin={false}

                onChange={props.onChange}
                value={props.content}
            />,
        </div>
    )
}
