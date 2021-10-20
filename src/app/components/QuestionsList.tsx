import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionSingle} from "./questionSingle/QuestionSingle";

interface Props {
    questions: Array<Question>;
}

// Render question list
export const QuestionsList: React.FC<Props> = (props) => {
    return (
        <ul className="list-unstyled">
            {
                props.questions.map((question, index) =>
                    <QuestionSingle
                        questionNo={index+1}
                        key={question.id}
                        question={question} />
                )
            }
        </ul>
    )
}