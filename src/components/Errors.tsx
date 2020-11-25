import React, {useEffect} from "react";
import './Errors.css';
import {List} from "immutable";

export default function Errors(props: {
    errors: List<string>
    onRemoveError: (message: string) => void
}) {
    return (
        <div className="Errors">
            <div className="ErrorItems">
                {props.errors.map((message, index) => <Error
                    key={index}
                    message={message}
                    onRemoveError={props.onRemoveError}
                />)}
            </div>
        </div>
    )
}

function Error(props: {
    message: string,
    onRemoveError: (message: string) => void
}) {

    useEffect(() => {
        const timeoutId = setTimeout(() => props.onRemoveError(props.message), 5000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [props])

    return (
        <div className="Error">
            {props.message.substring(0, 200)}{props.message.length > 200 ? "..." : ""}
        </div>
    )
}