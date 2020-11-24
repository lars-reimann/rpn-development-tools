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
import {ExecutionState, ExternalState, RpnValue, Stack as StackState} from "./model/executionState";

export default function App() {
    const [isExecuting, setExecuting] = useState(false)
    const [program, setProgram] = useState("")
    const [stack, setStack] = useState([] as RpnValue[])
    const [variables, setVariables] = useState([
        new ExternalBoolean("MYSIMVAR1", true),
        new ExternalNumber("MYSIMVAR2", 1),
        new ExternalString("mySimVarWithASuperLongStringToTestTheLabelInThisCase", "hello"),
        new ExternalWriteOnlyValue("MYSIMVAR4", "cannot be changed")
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

            const astNodes = parse(program)
            console.log(astNodes);
            const initialState = new ExecutionState(
                new StackState(stack),
                new ExternalState(variables.map(it => [it.name, it.value])),
                new ExternalState(registers.map(it => [it.name, it.value]))
            )

            try {
                const newState = astNodes.execute(initialState)
                setStack(newState.stack.stack.toArray())
                console.log(newState)
            } catch (error) {
                console.error(error)
            }
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
