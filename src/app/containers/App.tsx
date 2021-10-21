import React from 'react';
import './App.scss';
import {QuestionProvider} from "../context/QuestionContext";
import {QuestionContainer} from "./question/QuestionContainer";

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
