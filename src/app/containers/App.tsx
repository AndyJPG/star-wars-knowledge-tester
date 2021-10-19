import React from 'react';
import './App.css';
import {QuestionsList} from "../components/QuestionsList";
import {getQuestions} from "../../api/questionApi";
import {Question} from "../../modules/Question";

function App() {
    const [questions, setQuestions] = React.useState(new Array<Question>());

    React.useEffect(() => {
        getQuestions().then(data => setQuestions(data));
    }, []);

    return (
        <div className="App">
            <QuestionsList
                questions={questions} />
            <button>Submit</button>
        </div>
    );
}

export default App;
