import {Question} from "../modules/Question";
import QuestionRepository from "./QuestionRepository";
import QuestionDao from "./QuestionDao";

// Get all questions
export const getQuestions = (): Promise<Array<Question>> => {
    // Create new question repository object with question data access object assigned
    const questionRepository = new QuestionRepository(new QuestionDao());

    // Get all questions
    return questionRepository.getQuestions();
}