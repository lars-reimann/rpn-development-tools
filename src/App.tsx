import React, {useState} from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Simvars from "./components/Simvars";
import Replacements from "./components/Replacements";
import Registers from "./components/Registers";
import Controls from "./components/Controls";

function App() {
    const [program, setProgram] = useState("")
    const [stack, setStack] = useState([1, 2, 3, 4, 5, 6])

    return (
        <div className="App">
            <Editor codeIsRunning={false} content={program} onChange={setProgram}/>
            <Stack values={stack}/>
            <Simvars/>
            <Replacements/>
            <Registers/>
            <Controls/>
        </div>
    );
}

export default App;
