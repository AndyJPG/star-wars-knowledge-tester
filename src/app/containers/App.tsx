import React from 'react';
import './App.css';
import {QuestionsList} from "../components/QuestionsList";
import {getQuestions} from "../../api/questionApi";
import {Question} from "../../modules/Question";
import {QuestionContext} from "./QuestionContext";
import {Answer} from "../../modules/Answer";

function App() {
    // Questions state to store questions data
    const [questions, setQuestions] = React.useState(new Array<Question>());
    // Store user answers
    const [answers, setAnswers] = React.useState(new Array<Answer>())

    React.useEffect(() => {
        // Get all questions
        getQuestions()
            .then(data => {
                // Set questions to state
                setQuestions(data);
                // Generate default answers
                const defaultAnswer = data.map(question => (
                    {questionId: question.id, answer: ""}
                ));
                setAnswers(defaultAnswer);
            })
            .catch(e => console.log(e));
    }, []);

    // Handle answer changes
    const answerOnChange = (questionId: string, newAnswer: string) => {
        // Clone answers array
        const newAnswers = [...answers];
        // Update specific question answer
        newAnswers.forEach(answer => {
            if (answer.questionId === questionId) {
                answer.answer = newAnswer;
            }
        })
        // Set new answers to state
        setAnswers(newAnswers);
        console.log(answers);
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
