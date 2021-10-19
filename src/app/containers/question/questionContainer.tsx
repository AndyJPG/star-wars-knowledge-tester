import * as React from 'react';
import {QuestionsList} from "../../components/QuestionsList";
import {QuestionContext} from "../../context/QuestionContext";

export const QuestionContainer: React.FC = (props) => {
    // Question context
    const questionContext = React.useContext(QuestionContext);

    // Show loading message when fetching data
    if (questionContext.questions.length === 0 && !questionContext.errorFetchApi) {
        return <p>Loading...</p>;
    }

    // Show error message in failing to fetch data
    if (questionContext.errorFetchApi) {
        return <p>Something went wrong!</p>;
    }

    return (
        <>
            <QuestionsList
                questions={questionContext.questions}/>
            <button onClick={questionContext.answerOnSubmit}>Submit</button>
            {questionContext.showScore()}
        </>
    )
}