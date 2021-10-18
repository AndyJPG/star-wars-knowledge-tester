import * as React from 'react';
import {Question} from "../../modules/Question";
import {QuestionAnsweringField} from "./QuestionAnsweringField";

interface Props {
    questions: Array<Question>;
    onOptionSelected: (option: string) => void;
}

export const QuestionsList: React.FC<Props> = (props) => {
    return (
        <ul>
            <li>
                <h1>{props.questions[0].topic}</h1>
                <h5>{props.questions[0].type}</h5>
                <QuestionAnsweringField
                    questionType={props.questions[0].type}
                    questionOption={props.questions[0].answerOptions}
                    questionId={props.questions[0].id}
                    onOptionSelected={props.onOptionSelected} />
            </li>
        </ul>
    )
}