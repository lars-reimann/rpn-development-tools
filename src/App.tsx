import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Variables from "./components/Variables";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import parse from "./parser/ParserAccess";
import {ExecutionState, RpnValue} from "./model/executionState";

export default function App() {
    const [program, setProgram] = useState("")
    const [isExecuting, setExecuting] = useState(false)
    const [executionState, setExecutionState] = useState(new ExecutionState())
    const [initialExecutionState, setInitialExecutionState] = useState(executionState)
    // TODO history of execution states, not just the first one (so we can step backwards)
    // TODO program counter

    function clearStack() {
        setExecutionState(executionState.clearStack())
    }

    function toggleStepwiseExecution() {
        console.log("Toggled stepwise execution")
    }

    function runProgram() {
        setExecuting(true)

        if (!isExecuting) {
            setInitialExecutionState(executionState)

            const astNodes = parse(program)
            console.log(astNodes);

            try {
                const newState = astNodes.execute(executionState)
                setExecutionState(newState)
                console.log(newState)
            } catch (error) {
                console.error(error)
            }
        }

        setExecuting(false)
    }

    function nextStep() {
        console.log("Clicked next step")
        // setVariables([...variables, new ExternalNumber("added", 1)])
        // setRegisters(registers.write(1, "added"))
    }

    function updateVariable(name: string, newValueAsString: string) {
        let newValue
        if (newValueAsString.toLowerCase() === "false") {
            newValue = false
        } else if (newValueAsString.toLowerCase() === "true") {
            newValue = true
        } else if (!Number.isNaN(Number.parseFloat(newValueAsString))) {
            console.log(Number.parseFloat(newValueAsString))
            newValue = Number.parseFloat(newValueAsString)
        } else {
            newValue = newValueAsString
        }

        setExecutionState(executionState.writeVariable(name, newValue))
    }

    function restoreInitialExternalValues() {
        setExecutionState(initialExecutionState)
    }

    return (
        <div className="App">
            <Editor isExecuting={isExecuting} content={program} onChange={setProgram}/>
            <Stack stack={executionState.stack}/>
            <Variables
                variables={executionState.variables}
                isExecuting={isExecuting}
                onChange={updateVariable}
            />
            <Registers registers={executionState.registers}/>
            <Controls
                isExecuting={isExecuting}
                onClearStack={clearStack}
                onNextStep={nextStep}
                onRestoreInitialExternalValues={restoreInitialExternalValues}
                onRunProgram={runProgram}
                onToggleStepwiseExecution={toggleStepwiseExecution}
            />
        </div>
    );
}

function isNumber(s: string): boolean {
    try {
        Number.parseFloat(s)
        return true
    } catch (e) {
        return false
    }
}