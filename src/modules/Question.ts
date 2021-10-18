export interface Question {
    topic: string;
    type: string;
    answerOptions: Array<string>;
    correctAnswer: string;
    id: string;
}