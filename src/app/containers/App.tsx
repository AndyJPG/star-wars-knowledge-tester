import React from 'react';
import './App.css';
import {QuestionsList} from "../components/QuestionsList";
import {getQuestions} from "../../api/questionApi";
import {Question} from "../../modules/Question";
import {QuestionContext} from "./QuestionContext";

function App() {
    // Questions state to store questions data
    const [questions, setQuestions] = React.useState(new Array<Question>());
    // See if there is error in fetch api
    const [errorFetchApi, setErrorFetchApi] = React.useState(false);
    // Check if there is error in submission
    const [errorSubmission, setErrorSubmission] = React.useState(false);
    // Check if questions are submitted
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        // Get all questions
        getQuestions()
            .then(data => {
                // Set questions to state
                setQuestions(data);
            })
            .catch(e => {
                console.log(e);
                setErrorFetchApi(true);
            });
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

    // Handle submit answer
    const answerOnSubmit = () => {
        // Check if any of the question hasn't been answered
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            if (question.answer === undefined || question.answer === "") {
                setErrorSubmission(true);
                break;
            }
        }

        // If all question has been answered submit answer
        if (!errorSubmission) {
            setSubmitted(true);
        }
    }

    // Check if down fetching questions
    if (questions.length === 0 && !errorFetchApi) {
        return <p>Loading...</p>;
    }

    // Error message
    if (errorFetchApi){
        return <p>Something went wrong</p>;
    }

    return (
        <QuestionContext.Provider
            value={{
                submitted: submitted,
                errorOnSubmission: errorSubmission,
                answerOnChange: answerOnChange
            }}>
            <div className="App">
                <QuestionsList
                    questions={questions}/>
                <button onClick={answerOnSubmit}>Submit</button>
            </div>
        </QuestionContext.Provider>
    );
}

export default App;
