import { useState } from "react";
import questionsData from "./questions.json";
import "./App.css";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentCorrect, setCurrentCorrect] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showCorrect, setShowCorrect] = useState(false);

  const question = questionsData.questions[questionIndex];

  const handleSubmit = () => {
    checkAnswer();
    goToNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedAnswer === question.answer) {
      setCurrentCorrect((prev) => prev + 1);
    }
  };

  const goToNextQuestion = () => {
    if (questionIndex < questionsData.questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowCorrect(true);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <main className="main-content">
      <div className="question-container">
        {showCorrect ? (
          <h1>
            Score: {currentCorrect}/{questionsData.questions.length}
          </h1>
        ) : (
          <>
            <h1>{question.question}</h1>
            <ul className="options">
              {question.options.map((element) => (
                <li key={element}>
                  <input
                    type="radio"
                    name="option"
                    id={`option_${element}`}
                    value={element}
                    checked={selectedAnswer === element}
                    onChange={(e) => setSelectedAnswer(e.target.value)}
                  />
                  <label htmlFor={`option_${element}`}>{element}</label>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <input
        type="button"
        value={showCorrect ? "Reload" : "Submit"}
        onClick={showCorrect ? reloadPage : handleSubmit}
        className="btn"
      />
    </main>
  );
}

export default App;
