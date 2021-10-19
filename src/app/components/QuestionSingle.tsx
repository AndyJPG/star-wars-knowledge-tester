import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionAnsweringField} from "./QuestionAnsweringField";
import {useContext} from "react";
import {QuestionContext} from "../containers/QuestionContext";

interface Props {
    question: Question;
}

// Render single question
export const QuestionSingle: React.FC<Props> = (props) => {
    const questionContext = useContext(QuestionContext);

    // Display error message
    const errorMessage = () => {
        // Check if there is an error on submission
        // and answer is empty
        if (questionContext.errorOnSubmission && props.question.answer === "") {
            return <p>Please answer the question!</p>;
        }
    }

    // Display correct answer
    const displayCorrectAnswer = () => {
        // If submitted successfully display if the question was answered correctly
        if (questionContext.submitted) {
            if (props.question.correctAnswer.toLowerCase() === props.question.answer.toLowerCase()) {
                return <p>Correct!</p>;
            } else {
                return <p>Incorrect. The correct answer is: {props.question.correctAnswer}</p>
            }
        }
    }

    return (
        <li>
            <h1>{props.question.topic}</h1>
            <QuestionAnsweringField
                answer={props.question.answer}
                questionType={props.question.type}
                questionOption={props.question.answerOptions}
                questionId={props.question.id} />
            {errorMessage()}
            {displayCorrectAnswer()}
        </li>
    )
}