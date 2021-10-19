import { render, screen } from "@testing-library/react";
import {QuestionContainer} from "./questionContainer";

describe("When fetching questions", () => {
    it("should render loading message", () => {
        render(<QuestionContainer />);
        expect(screen.getByText(/Loading.../)).toBeInTheDocument();
    })
})