import {Question} from "../modules/Question";

// Questions data access object should
// implement its functionalities based on QuestionDaoInterface
export interface QuestionDaoInterface {
    // Get all questions
    getQuestions: () => Promise<Array<Question>>;
}