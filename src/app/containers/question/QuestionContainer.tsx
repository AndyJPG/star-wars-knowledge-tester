import * as React from 'react';
import './questionContainer.scss';
import {QuestionsList} from "../../components/QuestionsList";
import {QuestionContext} from "../../context/QuestionContext";
import {QuestionSingle} from "../../components/questionSingle/QuestionSingle";

export const QuestionContainer: React.FC = (props) => {
    // Question context
    const questionContext = React.useContext(QuestionContext);
    // Current question index
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

    // Handle question navigation
    const handleQuestionNavigation = (next: number) => {
        const nextQuestionIndex = currentQuestionIndex + next;
        // Return if out of range
        if (nextQuestionIndex >= questionContext.questions.length || nextQuestionIndex < 0) {
            return;
        }

        setCurrentQuestionIndex(prevState => prevState + next);
    }

    // Show answer score
    const displayScoreAndAnswer = () => {
        return (
            <>
                <h3 className="total-score">Total score: {questionContext.score()} out of {questionContext.questions.length}</h3>
                <QuestionsList
                    questions={questionContext.questions}/>
            </>
        )
    }

    // Show loading message when fetching data
    if (questionContext.questions.length === 0 && !questionContext.errorFetchApi) {
        return <p>Loading...</p>;
    }

    // Show error message in failing to fetch data
    if (questionContext.errorFetchApi) {
        return <p>Something went wrong!</p>;
    }

    return (
        <div className="question-container">
            {
                questionContext.submitted ?
                    displayScoreAndAnswer() :
                    <QuestionSingle
                        handleQuestionNavigation={handleQuestionNavigation}
                        questionNo={currentQuestionIndex}
                        question={questionContext.questions[currentQuestionIndex]}/>
            }
        </div>
    )
}