import React from 'react';
import './App.css';
import {QuestionProvider} from "../context/QuestionContext";
import {QuestionContainer} from "./question/questionContainer";

function App() {
    return (
        <div className="app">
            <QuestionProvider>
                <QuestionContainer />
            </QuestionProvider>
        </div>
    );
}

export default App;
