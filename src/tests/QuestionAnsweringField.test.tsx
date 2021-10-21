import {cleanup, fireEvent, render, waitForElementToBeRemoved} from "@testing-library/react";
import {QuestionContext, QuestionProvider} from "../app/context/QuestionContext";
import {QuestionContainer} from "../app/containers/question/QuestionContainer";

afterEach(cleanup);

describe("Answering question test", () => {

    it('should highlight selected single option', () => {
        // Arrange: render question answering field
        const {getByTestId, getByText} = render(<QuestionProvider>
            <QuestionContainer/>
        </QuestionProvider>)
        return waitForElementToBeRemoved(getByText("Loading..."))
            .then(() => {
            // Act: select question option
            fireEvent.click(getByTestId("C-3PO-single-select"));
            // Assert: the selection should be highlighted
            expect(getByTestId("C-3PO-single-select")).toHaveClass("selected");
        })
    });
})