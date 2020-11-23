import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Variables from "./components/Variables";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import {
    ExternalBoolean,
    ExternalNumber,
    ExternalString,
    ExternalValue,
    ExternalWriteOnlyValue
} from "./model/externalValue";
import parse from "./parser/ParserAccess";

export default function App() {
    const [isExecuting, setExecuting] = useState(false)
    const [program, setProgram] = useState("")
    const [stack, setStack] = useState([1, 2, 3, 4, 5, 6] as any[])
    const [variables, setVariables] = useState([
        new ExternalBoolean("mySimVar1", true),
        new ExternalNumber("mySimVar2", 1),
        new ExternalString("mySimVarWithASuperLongStringToTestTheLabelInThisCase", "hello"),
        new ExternalWriteOnlyValue("mySimVar4", "cannot be changed")
    ] as ExternalValue[])
    const [registers, setRegisters] = useState([
        new ExternalBoolean("r1", true)
    ] as ExternalValue[])
    const [initialVariables, setInitialVariables] = useState([...variables])
    const [initialRegisters, setInitialRegisters] = useState([...registers])

    function toggleExecution() {
        if (!isExecuting) {
            setInitialVariables([...variables])
            setInitialRegisters([...registers])

            const tree = parse(program)
            console.log(tree);
        }

        setExecuting(!isExecuting)
    }

    function nextStep() {
        console.log("Clicked next step")
        setVariables([...variables, new ExternalNumber("added", 1)])
        setRegisters([...registers, new ExternalNumber("added", 1)])
    }

    function restoreInitialExternalValues() {
        setVariables([...initialVariables])
        setRegisters([...initialRegisters])
    }

    return (
        <div className="App">
            <Editor readOnly={isExecuting} content={program} onChange={setProgram}/>
            <Stack values={stack}/>
            <Variables
                variables={variables}
                disabled={isExecuting}
                onChange={(newValue) => updateExternalValue(variables, setVariables, newValue)}
            />
            <Registers
                registers={registers}
                disabled={isExecuting}
                onChange={(newValue) => updateExternalValue(registers, setRegisters, newValue)}
            />
            <Controls
                isExecuting={isExecuting}
                onClearStack={() => setStack([])}
                onNextStep={nextStep}
                onRestoreInitialExternalValues={restoreInitialExternalValues}
                onToggleExecuting={toggleExecution}
            />
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
