import {QuestionDaoInterface} from "./QuestionDaoInterface";
import {Question} from "../modules/Question";

// Question repository for access question data
export default class QuestionRepository {
    _questionDao: QuestionDaoInterface;

    constructor(questionDao: QuestionDaoInterface) {
        this._questionDao = questionDao;
    }

    // Get all questions
    getQuestions(): Promise<Array<Question>> {
        return this._questionDao.getQuestions();
    }
}