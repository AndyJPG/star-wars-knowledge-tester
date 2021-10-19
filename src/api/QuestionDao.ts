import {QuestionDaoInterface} from "./QuestionDaoInterface";
import {Question} from "../modules/Question";

// Questions API
const questionsData = '[{"topic": "Select a characters who appear in every Star Wars movie.","type": "SingleSelect","answerOptions": ["Luke Skywalker","C-3PO","Leia Organa","Han Solo","Obi-Wan Kenobi"],"correctAnswer": "C-3PO","id": "GMVXSO0zgE4d1OM8133Gp"},{"topic": "Who played Princess Leia?","type": "TextInput","correctAnswer": "carrie fisher","id": "dBkK7mayj9McFUW2WyNwk"},{"topic": "In what year the original Star Wars film was first released?","type": "SingleSelect","answerOptions": ["1975","1976","1977","1978","1979"],"correctAnswer": "1977","id": "nRgqqQa4065Mo-AhUMp__"},{"topic": "How old was Yoda when he died in episode VI?","type": "SingleSelect","answerOptions": ["700","800","850","900","950"],"correctAnswer": "900","id": "huAAPxvP_IrPPbCnF5Rp2"},{"topic": "What does AT-AT stand for?","type": "TextInput","correctAnswer": "All Terrain Armored Transport","id": "QYdnsqT6LLMptJxL8qDZ_"}]';

// Low leve module
// Specific implementation of getting questions data
export default class QuestionDao implements QuestionDaoInterface {
    // Get all questions
    getQuestions = () => {
        // Return promise contain all questions
        const promise = new Promise<Array<Question>>((resolve, reject) => {
            // Set time out to simulate data retrieval
            setTimeout(
                () => {
                    try {
                        // Parse json data
                        const jsonData = JSON.parse(questionsData);
                        // Map json data to question
                        const questions = jsonData.map((data: any) => {
                            // Create new question object
                            let question: Question = {
                                topic: "", type: "",
                                answerOptions: [],
                                correctAnswer: "",
                                id: "", answer: ""
                            };

                            // Validate topic values
                            if (data.topic === undefined) {
                                throw new Error("Question topic undefined!");
                            } else {
                                question.topic = data.topic;
                            }

                            // Validate type value
                            if (data.type === undefined) {
                                throw new Error("Question type undefined!");
                            } else {
                                question.type = data.type;
                            }

                            // Validate correct answer value
                            if (data.correctAnswer === undefined) {
                                throw new Error("Question correct answer is undefined!");
                            } else {
                                question.correctAnswer = data.correctAnswer
                            }

                            // Validate id value
                            if (data.id === undefined) {
                                throw new Error("Question id is undefined!");
                            } else {
                                question.id = data.id
                            }

                            // Validate answer options
                            if (data.answerOptions !== undefined) {
                                question.answerOptions = data.answerOptions;
                            }

                            return question;
                        });
                        // Resolve question api data
                        resolve(questions)
                    } catch (e) {
                        reject(e);
                    }
                }
                , 500
            );
        });
        return promise;
    }
}