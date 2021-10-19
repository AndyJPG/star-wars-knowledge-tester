import * as React from 'react';

interface QuestionContextProps {
    answerOnChange: (questionId: string, answer: string) => void;
}

export const QuestionContext = React.createContext<QuestionContextProps>({
    answerOnChange: (questionId, answer) => {}
});