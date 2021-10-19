export interface Question {
    topic: string;
    type: string;
    answerOptions: Array<string>;
    correctAnswer: string;
    answer: string;
    id: string;
}