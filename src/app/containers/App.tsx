import React from 'react';
import './App.css';
import {QuestionsList} from "../components/QuestionsList";

// Question API
const questions = '[{"topic": "Select a characters who appear in every Star Wars movie.","type": "SingleSelect","answerOptions": ["Luke Skywalker","C-3PO","Leia Organa","Han Solo","Obi-Wan Kenobi"],"correctAnswer": "C-3PO","id": "GMVXSO0zgE4d1OM8133Gp"},{"topic": "Who played Princess Leia?","type": "TextInput","answer": "carrie fisher","id": "dBkK7mayj9McFUW2WyNwk"},{"topic": "In what year the original Star Wars film was first released?","type": "SingleSelect","answerOptions": ["1975","1976","1977","1978","1979"],"correctAnswer": "1977","id": "nRgqqQa4065Mo-AhUMp__"},{"topic": "How old was Yoda when he died in episode VI?","type": "SingleSelect","answerOptions": ["700","800","850","900","950"],"correctAnswer": "900","id": "huAAPxvP_IrPPbCnF5Rp2"},{"topic": "What does AT-AT stand for?","type": "TextInput","correctAnswer": "All Terrain Armored Transport","id": "QYdnsqT6LLMptJxL8qDZ_"}]';

function App() {
    const [selectedOption, setSelectedOption] = React.useState("");

    return (
        <div className="App">
            <QuestionsList
                questions={JSON.parse(questions)}
                onOptionSelected={setSelectedOption} />
        </div>
    );
}

export default App;
