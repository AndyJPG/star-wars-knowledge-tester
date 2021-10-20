import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionSingle} from "./questionSingle/QuestionSingle";

interface Props {
    questions: Array<Question>;
}

// Render question list
export const QuestionsList: React.FC<Props> = (props) => {
    return (
        <>
            {
                props.questions.map((question, index) =>
                    <QuestionSingle
                        questionNo={index}
                        key={question.id}
                        question={question} />
                )
            }
        </>
    )
}