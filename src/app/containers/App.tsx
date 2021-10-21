import React from 'react';
import './App.scss';
import {QuestionProvider} from "../context/QuestionContext";
import {QuestionContainer} from "./question/questionContainer";

function App() {
    return (
        <div className="app container-lg">
            <QuestionProvider>
                <QuestionContainer />
            </QuestionProvider>
        </div>
    );
}

export default App;
