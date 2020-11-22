import React from 'react';
import './App.css';
import Editor from "./components/Editor";
import Stack from "./components/Stack";
import Simvars from "./components/Simvars";
import Replacements from "./components/Replacements";
import Registers from "./components/Registers";
import Controls from "./components/Controls";

function App() {
    return (
        <div className="App">
            <Editor/>
            <Stack/>
            <Simvars/>
            <Replacements/>
            <Registers/>
            <Controls/>
        </div>
    );
}

export default App;
