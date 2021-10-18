import * as React from 'react';

interface Props {
    questionId: string;
    questionOption: Array<string>;
    onOptionSelected: (option: string) => void;
}

export const QuestionOptionPicker: React.FC<Props> = (props) => {
    return (
        <div>
            {
                props.questionOption.map(option => (
                    <>
                        <input
                            key={option}
                            id={option}
                            type="radio"
                            name={props.questionId + "-question-option"}
                            value={option}
                            onChange={event => props.onOptionSelected(option)}/><label htmlFor={option}>{option}</label><br />
                    </>
                ))
            }
        </div>
    )
}