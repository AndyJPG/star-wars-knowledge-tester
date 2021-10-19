import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionSingle} from "./QuestionSingle";

interface Props {
    questions: Array<Question>;
}

export const QuestionsList: React.FC<Props> = (props) => {
    return (
        <ul>
            {
                props.questions.map(question => <QuestionSingle key={question.id} question={question} />)
            }
        </ul>
    )
}