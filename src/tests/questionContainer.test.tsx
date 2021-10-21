import {cleanup, render, screen} from "@testing-library/react";
import {QuestionContainer} from "../app/containers/question/questionContainer";

afterEach(cleanup);

// When fetching questions api
// it should render loading message
describe("When fetching questions", () => {
    it("should render loading message", () => {
        render(<QuestionContainer />);
        expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    });
});