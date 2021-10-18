import * as React from 'react';

// Props interface
interface Props {
    questionId: string;
    questionType: string;
    questionOption: Array<string>;
}

export const QuestionAnsweringField: React.FC<Props> = (props) => {
    return (
        <div>
            {
                props.questionType === "SingleSelect" &&
                props.questionOption.map(option => (
                    <div>
                        <input
                            key={option}
                            id={option}
                            type="radio"
                            name={props.questionId + "-question-option"}
                            value={option}/>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            }

            {
                props.questionType === "TextInput" &&
                    <textarea />
            }
        </div>
    )
}