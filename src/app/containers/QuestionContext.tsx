import * as React from 'react';
import {Question} from "../../modules/Question";
import {getQuestions} from "../../api/questionApi";

// Question context
interface QuestionContextProps {
    questions: Array<Question>;
    submitted: boolean;
    errorOnSubmission: boolean;
    errorFetchApi: boolean;
    answerOnSubmit: () => void;
    score: () => number | undefined;
    answerOnChange: (questionId: string, answer: string) => void; // Track changes
}

// Question context
export const QuestionContext = React.createContext<QuestionContextProps>({
    questions: [],
    errorOnSubmission: false,
    submitted: false,
    errorFetchApi: false,
    answerOnSubmit: () => {},
    score: (): number | undefined => undefined,
    answerOnChange: (questionId, answer) => {}
});

// Question context provider
export const QuestionProvider: React.FC = (props) => {
    // Questions state to store questions data
    const [questions, setQuestions] = React.useState(new Array<Question>());
    // See if there is error in fetch api
    const [errorFetchApi, setErrorFetchApi] = React.useState(false);
    // Check if questions are submitted
    const [submitted, setSubmitted] = React.useState(false);
    // Check if there is error in submission
    const [errorSubmission, setErrorSubmission] = React.useState(false);

    React.useEffect(() => {
        // Get all questions
        getQuestions()
            .then(data => {
                // Set questions to state
                setQuestions(data);
            })
            .catch(e => {
                console.log(e);
                setErrorFetchApi(true);
            });
    }, []);

    // Handle submit answer
    const answerOnSubmit = () => {
        let questionNotAnsweredExist = false;

        // Check if any of the question hasn't been answered
        for (let i = 0; i < questions.length; i++) {
            const question = questions[i];
            if (question.answer === undefined || question.answer === "") {
                questionNotAnsweredExist = true;
                break;
            }
        }

        // If question not answered
        if (questionNotAnsweredExist) {
            setErrorSubmission(true);
            return;
        } else {
            setErrorSubmission(false);
        }

        // If all question has been answered submit answer
        setSubmitted(true);
    }

    // Calculate score
    const score = (): number | undefined => {
        // Return if answer not submitted
        if (!submitted) {
            return;
        }

        // Total score
        const totalScore = questions.length;

        // Calculate score
        let score = 0;
        questions.forEach(question => {
            if (question.correctAnswer.toLowerCase() === question.answer.toLowerCase()) {
                score++;
            }
        })

        return score;
    }

    // Handle answer changes
    const answerOnChange = (questionId: string, newAnswer: string) => {
        // Clone answers array
        const newQuestions = [...questions];
        // Update specific question answer
        newQuestions.forEach(question => {
            if (question.id === questionId) {
                question.answer = newAnswer;
            }
        });
        // Set new answers to state
        setQuestions(newQuestions);
    }

    return (
        <QuestionContext.Provider value={{
            questions: questions,
            submitted: submitted,
            errorOnSubmission: errorSubmission,
            errorFetchApi: errorFetchApi,
            answerOnSubmit: answerOnSubmit,
            score: score,
            answerOnChange: answerOnChange
        }}>
            {props.children}
        </QuestionContext.Provider>
    );
};