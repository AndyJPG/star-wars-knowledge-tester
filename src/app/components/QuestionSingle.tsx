import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionAnsweringField} from "./QuestionAnsweringField";

interface Props {
    question: Question;
}

// Render single question
export const QuestionSingle: React.FC<Props> = (props) => {
    return (
        <li>
            <h1>{props.question.topic}</h1>
            <QuestionAnsweringField
                answer={props.question.answer}
                questionType={props.question.type}
                questionOption={props.question.answerOptions}
                questionId={props.question.id} />
        </li>
    )
}