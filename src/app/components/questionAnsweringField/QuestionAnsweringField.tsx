import * as React from 'react';
import './questionAnsweringField.scss';
import {QuestionContext} from "../../containers/QuestionContext";

// Props interface
interface Props {
    answer: string;
    questionId: string;
    questionType: string;
    questionOption: Array<string>;
}

export const QuestionAnsweringField: React.FC<Props> = (props) => {
    const questionContext = React.useContext(QuestionContext);

    // Question single select option
    const singleSelectOption = () => {
        return props.questionOption.map(option => {
            // Check if this option is selected
            let selected = false;
            if (props.answer === option) {
                selected = true;
            }

            // Select option icon
            let icon;
            if (selected) {
                icon = <i className="far fa-check-circle selected"/>;
            } else {
                icon = <i className="far fa-circle" />;
            }

            // Label class
            const labelClass = "single-select" + (selected ? " selected" : "");

            return (
                <label className={labelClass}
                       key={option}
                       htmlFor={option}>
                    {icon}
                    <input
                        id={option}
                        type="radio"
                        name={props.questionId + "-question-option"}
                        value={option}
                        onChange={() => questionContext.answerOnChange(props.questionId, option)}/>
                    <p>{option}</p>
                </label>
            )
        })
    }

    // Question text input option
    const textInput = () => {
        return (
            <textarea
                placeholder="Your answer here"
                className="text-input"
                value={props.answer}
                onChange={(e) => questionContext.answerOnChange(props.questionId, e.currentTarget.value)}/>
        )
    }

    return (
        <div className="question-answering-field">
            {
                props.questionType === "SingleSelect" && singleSelectOption()
            }

            {
                props.questionType === "TextInput" && textInput()
            }
        </div>
    )
}