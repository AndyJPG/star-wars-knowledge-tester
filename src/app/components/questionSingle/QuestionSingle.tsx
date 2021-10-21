import * as React from 'react';
import './questionSingle.scss';
import {Question} from "../../../modules/Question";
import {QuestionAnsweringField} from "../questionAnsweringField/QuestionAnsweringField";
import {useContext, useEffect} from "react";
import {QuestionContext} from "../../context/QuestionContext";

interface Props {
    questionNo: number;
    question: Question;
    handleQuestionNavigation?: (next: number) => void;
}

// Render single question
export const QuestionSingle: React.FC<Props> = (props) => {
    const questionContext = useContext(QuestionContext);
    // Display warning message
    const [displayWarning, setDisplayWarning] = React.useState(false);

    useEffect(() => {
        if (props.question.answer !== "") {
            setDisplayWarning(false);
        }
    }, [props.question.answer])

    // Display correct answer
    const displayCorrectAnswer = () => {
        // If submitted successfully display if the question was answered correctly
        if (questionContext.submitted) {
            if (props.question.correctAnswer.toLowerCase() === props.question.answer.toLowerCase().trim()) {
                return <div className="alert alert-success"><b>Correct!</b></div>;
            } else {
                return <div className="alert alert-danger">
                    <b>Incorrect</b> - The correct answer is: {props.question.correctAnswer}</div>
            }
        }
    }

    // Handle question navigation
    const checkBeforeNextQuestion = () => {
        if (props.question.answer === "") {
            setDisplayWarning(true);
            return;
        } else {
            setDisplayWarning(false);
        }
        props.handleQuestionNavigation!(1);
    }

    // Handle question on submit
    const handleQuestionOnSubmit = () => {
        // Check if current question is answered
        if (props.question.answer === "") {
            setDisplayWarning(true);
            return;
        }
        questionContext.answerOnSubmit();
    }

    // Display question navigation
    const displayQuestionNav = () => {
        if (props.handleQuestionNavigation === undefined) {
            return;
        }

        // Last question btn
        const lastBtn = <button className={`btn ${props.questionNo === 0 && "disabled"}`}
                                onClick={() => props.handleQuestionNavigation!(-1)}>
            Last Question
        </button>;
        // Next question btn
        const nextBtn = <button className="btn" onClick={() => checkBeforeNextQuestion()}>Next Question</button>;

        // Submit btn
        const submitBtn = <button className="btn btn-success" onClick={() => handleQuestionOnSubmit()}>Submit</button>;

        return (
            <div className="question-nav">
                {lastBtn}
                {props.questionNo === questionContext.questions.length -1 ? submitBtn : nextBtn}
            </div>
        )
    }

    return (
        <div className="question">
            <h5 className="question-number-indicator">QUESTION {props.questionNo+1}/{questionContext.questions.length}</h5>
            <h3 className="question-topic">{props.question.topic}</h3>
            <QuestionAnsweringField
                answer={props.question.answer}
                questionType={props.question.type}
                questionOption={props.question.answerOptions}
                questionId={props.question.id} />
            {!questionContext.submitted && <div className={`alert alert-warning ${!displayWarning && "hidden"}`}>Please answer the question!</div>}
            {displayCorrectAnswer()}
            {displayQuestionNav()}
        </div>
    )
}