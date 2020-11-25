import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Variables from "./components/Variables";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import parse from "./parser/ParserAccess";
import {ExecutionState, RpnValue, VariablesState} from "./model/executionState";
import {VariableAccess, VariableAssignment} from "./model/astNodes";

export default function App() {
    const [code, setCode] = useState("")
    const [isExecuting, setExecuting] = useState(false)
    const [executionState, setExecutionState] = useState(new ExecutionState())
    const [initialExecutionState, setInitialExecutionState] = useState(executionState)
    // TODO history of execution states, not just the first one (so we can step backwards)
    // TODO program counter

    function updateVariables() {
        const program = parse(code)
        const variables = program.actions
            .filter(it => it instanceof VariableAccess || it instanceof VariableAssignment)
            .map(it => (it as (VariableAccess | VariableAssignment)).name)
            .map(it => [it, (executionState.variables.read(it) ?? "")] as [string, RpnValue])

        setExecutionState(executionState.copy({variables: new VariablesState(variables)}))
    }

    function clearStack() {
        setExecutionState(executionState.clearStack())
    }

    function toggleStepwiseExecution() {
        console.log("Toggled stepwise execution")
        setExecuting(!isExecuting)
    }

    function runProgram() {
        setExecuting(true)

        if (!isExecuting) {
            setInitialExecutionState(executionState)

            try {
                const program = parse(code)
                const nextState1 = executionState.copy({program, programCounter: 0})
                const nextState2 = program.execute(nextState1)
                setExecutionState(nextState2)
            } catch (error) {
                // TODO Show an error message.
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

    function previousStep() {
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
            <Editor isExecuting={isExecuting} content={code} onChange={setCode}/>
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
                onPreviousStep={previousStep}
                onRestoreInitialExternalValues={restoreInitialExternalValues}
                onRunProgram={runProgram}
                onToggleStepwiseExecution={toggleStepwiseExecution}
                onUpdateVariables={updateVariables}
            />
        </div>
    );
}
