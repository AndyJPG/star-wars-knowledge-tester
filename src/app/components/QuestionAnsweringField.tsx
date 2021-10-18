import * as React from 'react';

interface Props {
    questionId: string;
    questionType: string;
    questionOption: Array<string>;
    onOptionSelected: (option: string) => void;
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
                            value={option}
                            onChange={event => props.onOptionSelected(option)}/><label htmlFor={option}>{option}</label>
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