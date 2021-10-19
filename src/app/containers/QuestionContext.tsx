import * as React from 'react';

// Question context
interface QuestionContextProps {
    errorOnSubmission: boolean;
    submitted: boolean;
    answerOnChange: (questionId: string, answer: string) => void; // Track changes
}

export const QuestionContext = React.createContext<QuestionContextProps>({
    errorOnSubmission: false,
    submitted: false,
    answerOnChange: (questionId, answer) => {}
});