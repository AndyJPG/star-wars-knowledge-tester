// Test question data access object
import QuestionDao from "../api/QuestionDao";

describe('questions data access object', () => {
    describe('when json data property is missing', () => {
        it('should return a reject in promise', () => {
            // Arrange: prepare invalid data
            // missing question option property
            const invalidQuestionsData = '[{"topic": "Select a characters who appear in every Star Wars movie.","type": "SingleSelect","correctAnswer": "C-3PO","id": "GMVXSO0zgE4d1OM8133Gp"}]';

            // Act: create question data access object
            const questionDao = new QuestionDao();
            questionDao._questionsData = invalidQuestionsData;

            // Assert: question dao should reject
            // as correct answer property is missing
            return expect(questionDao.getQuestions()).rejects.toThrow(new Error("Question option is undefined!"));
        });
    });
});