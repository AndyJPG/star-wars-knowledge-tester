import {cleanup, fireEvent, render} from "@testing-library/react";
import {QuestionSingle} from "../app/components/questionSingle/QuestionSingle";

afterEach(cleanup);

const questionTestData = {
    topic: "Select a characters who appear in every Star Wars movie.",
    type: "SingleSelect",
    answerOptions: ["Luke Skywalker","C-3PO","Leia Organa","Han Solo","Obi-Wan Kenobi"],
    correctAnswer: "C-3PO",
    answer: "",
    id: "GMVXSO0zgE4d1OM8133Gp"
}

// When user click next question button without answering current question
describe("Question navigation test", () =>{

    it("should hide warning message by default", () => {
        // Arrange: render single component
        const { getByText } = render(<QuestionSingle questionNo={0}
                                                     question={questionTestData} />);
        // Assert: initial warning should be hidden
        expect(getByText("Please answer the question!")).toHaveClass('hidden');
    });

    it("should show warning message when user click it without answer the question", () => {
        // Arrange: render single question component
        const { getByText } = render(<QuestionSingle questionNo={0}
                                                     question={questionTestData}
                                                     handleQuestionNavigation={() => {}} />);
        // Act: fire next question button event
        fireEvent.click(getByText("Next Question"));
        // Assert: warning message should show
        expect(getByText("Please answer the question!").classList.contains("hidden")).toBe(false);
    })

    it("should disable last question button if current question is first question", () => {
        // Arrange: render single question component
        const { getByText } = render(<QuestionSingle questionNo={0}
                                                     question={questionTestData}
                                                     handleQuestionNavigation={() => {}} />);
        // Assert: last question button should be disabled
        expect(getByText("Last Question").classList.contains("disabled")).toBe(true);
    })
});