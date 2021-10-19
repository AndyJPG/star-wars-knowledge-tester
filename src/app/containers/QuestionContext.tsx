import * as React from 'react';

// Question context
interface QuestionContextProps {
    answerOnChange: (questionId: string, answer: string) => void; // Track changes
}

export const QuestionContext = React.createContext<QuestionContextProps>({
    answerOnChange: (questionId, answer) => {}
});