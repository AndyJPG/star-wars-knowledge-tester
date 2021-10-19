import React from 'react';
import './App.css';
import {QuestionsList} from "../components/QuestionsList";
import {getQuestions} from "../../api/questionApi";
import {Question} from "../../modules/Question";
import {QuestionContext} from "./QuestionContext";

function App() {
    // Questions state to store questions data
    const [questions, setQuestions] = React.useState(new Array<Question>());

    React.useEffect(() => {
        // Get all questions
        getQuestions()
            .then(data => {
                // Set questions to state
                setQuestions(data);
            })
            .catch(e => console.log(e));
    }, []);

    // Handle answer changes
    const answerOnChange = (questionId: string, newAnswer: string) => {
        // Clone answers array
        const newQuestions = [...questions];
        // Update specific question answer
        newQuestions.forEach(question => {
            if (question.id === questionId) {
                question.answer = newAnswer;
            }
        });
        // Set new answers to state
        setQuestions(newQuestions);
    }

    if (questions.length === 0) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <QuestionContext.Provider
            value={{answerOnChange: answerOnChange}}>
            <div className="App">
                <QuestionsList
                    questions={questions}/>
                <button>Submit</button>
            </div>
        </QuestionContext.Provider>
    );
}

export default App;
