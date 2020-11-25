import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Variables from "./components/Variables";
import Registers from "./components/Registers";
import Controls from "./components/Controls";
import parse from "./parser/ParserAccess";
import {ExecutionState, RpnValue, VariablesState} from "./model/executionState";
import {Action, VariableAccess, VariableAssignment} from "./model/astNodes";
import {List} from "immutable";

export default function App() {
    const [code, setCode] = useState("")
    const [isExecuting, setExecuting] = useState(false)
    const [executionState, setExecutionState] = useState(new ExecutionState())
    const [executionStateHistory, setExecutionStateHistory] = useState(List<ExecutionState>())

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
        setExecuting(!isExecuting)

        // isExecuting is still the old value, which is why we need to negate it
        if (!isExecuting) {
            setExecutionStateHistory(List())

            try {
                const program = parse(code)
                const nextState1 = executionState.copy({program, programCounter: 0})
                setExecutionState(nextState1)
            } catch (error) {
                // TODO Show an error message in a toast.
                console.error(error)
                setExecuting(false)
            }
        }
    }

    function runProgram() {
        setExecuting(true)

        // isExecuting is still the old value, which is why we need to negate it
        if (!isExecuting) {
            setExecutionStateHistory(List([executionState]))

            try {
                const program = parse(code)
                const nextState1 = executionState.copy({program, programCounter: 0})
                const nextState2 = program.execute(nextState1)
                setExecutionState(nextState2)
            } catch (error) {
                // TODO Show an error message in a toast.
                console.error(error)
            }
        }

        setExecuting(false)
    }

    function nextStep() {
        if (!executionState.isDone) {
            setExecutionStateHistory(executionStateHistory.push(executionState))

            try {
                const nextState1 = (executionState.nextAction as Action).execute(executionState)
                setExecutionState(nextState1)
                if (nextState1.isDone) {
                    setExecuting(false)
                }
            } catch (error) {
                // TODO Show an error message in a toast.
                console.error(error)
                setExecuting(false)
            }
        }
    }

    function previousStep() {
        if (!executionStateHistory.isEmpty()) {
            setExecutionState(executionStateHistory.last())
            setExecutionStateHistory(executionStateHistory.pop())
        }
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
        if (!executionStateHistory.isEmpty()) {
            setExecutionState(executionStateHistory.get(0) as ExecutionState)
        }
    }

    return (
        <div className="App">
            <Editor
                content={code}
                currentAction={executionState.nextAction}
                isExecuting={isExecuting}
                onChange={setCode}
            />
            <Stack stack={executionState.stack}/>
            <Variables
                variables={executionState.variables}
                isExecuting={isExecuting}
                onChange={updateVariable}
            />
            <Registers registers={executionState.registers}/>
            <Controls
                canUndo={!executionStateHistory.isEmpty()}
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
