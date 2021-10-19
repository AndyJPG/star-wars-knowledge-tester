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

    const errorMessage = () => {
        if (questionContext.errorOnSubmission) {
            if (props.question.answer === undefined || props.question.answer === "") {
                return <p>Please answer the question!</p>;
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
        </li>
    )
}