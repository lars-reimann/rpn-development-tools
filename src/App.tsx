import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import SimVars from "./components/SimVars";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import {
    ExternalBoolean,
    ExternalNumber,
    ExternalString,
    ExternalValue,
    ExternalWriteOnlyValue
} from "./model/externalValue";

export default function App() {
    const [isExecuting, setExecuting] = useState(false)
    const [program, setProgram] = useState("")
    const [stack, setStack] = useState([1, 2, 3, 4, 5, 6] as any[])
    const [simVars, setSimVars] = useState([
        new ExternalBoolean("mySimVar1", true),
        new ExternalNumber("mySimVar2", 1),
        new ExternalString("mySimVarWithASuperLongStringToTestTheLabelInThisCase", "hello"),
        new ExternalWriteOnlyValue("mySimVar4", "cannot be changed")
    ] as ExternalValue[])
    const [registers, setRegisters] = useState([
        new ExternalBoolean("r1", true)
    ] as ExternalValue[])

    return (
        <div className="App">
            <Editor readOnly={isExecuting} content={program} onChange={setProgram}/>
            <Stack values={stack}/>
            <SimVars simVars={simVars} onChange={(newValue) => updateExternalValue(simVars, setSimVars,  newValue)}/>
            <Registers registers={registers} onChange={(newValue) => updateExternalValue(registers, setRegisters,  newValue)}/>
            <Controls/>
        </div>
    );
}

function updateExternalValue(
    oldState: ExternalValue[],
    setter: (newState: ExternalValue[]) => void,
    newValue: ExternalValue
) {
    const index = oldState.findIndex(it => it.name === newValue.name)
    const newState = [...oldState.slice(0, index), newValue, ...oldState.slice(index + 1, oldState.length)]
    setter(newState)
}