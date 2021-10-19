import * as React from 'react';
import {QuestionContext} from "../context/QuestionContext";

// Props interface
interface Props {
    answer: string;
    questionId: string;
    questionType: string;
    questionOption: Array<string>;
}

export const QuestionAnsweringField: React.FC<Props> = (props) => {
    const questionContext = React.useContext(QuestionContext);

    return (
        <div>
            {
                props.questionType === "SingleSelect" &&
                props.questionOption.map(option => (
                    <div key={option}>
                        <input
                            id={option}
                            type="radio"
                            name={props.questionId + "-question-option"}
                            value={option}
                            onChange={() => questionContext.answerOnChange(props.questionId, option)}/>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            }

            {
                props.questionType === "TextInput" &&
                    <textarea
                        value={props.answer}
                        onChange={(e) => questionContext.answerOnChange(props.questionId, e.currentTarget.value)} />
            }
        </div>
    )
}