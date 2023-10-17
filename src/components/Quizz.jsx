import React, { useState } from "react";
import { resultInitialState } from "../Data/QuizzData";
import "./Quizz.css";

const Quizz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerId, setAnswerId] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [showAnswers, setShowAnswers] = useState(false);

  const { photo, question, options, reponse } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerId(index);
    const isCorrect = answer === reponse;
    setAnswer(isCorrect);
    if (isCorrect) {
      setCorrectAnswers((prevCorrectAnswers) => [
        ...prevCorrectAnswers,
        answer,
      ]);
    } else {
      setIncorrectAnswers((prevIncorrectAnswers) => [
        ...prevIncorrectAnswers,
        answer,
      ]);
    }
  };

  const averageScore = (result.correctAnswer / questions.length) * 100;

  const onClickNext = () => {
    if (showAnswers) {
      setAnswerId(null);
      const isCorrect = answer;
      setResult((prev) => ({
        score: prev.score + (isCorrect ? 5 : -5),
        correctAnswer: isCorrect ? prev.correctAnswer + 1 : prev.correctAnswer,
        wrongAnswer: isCorrect ? prev.wrongAnswer : prev.wrongAnswer + 1,
      }));

      if (currentQuestion !== questions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setShowAnswers(false);
      } else {
        setShowResult(true);
      }
    } else {
      setShowAnswers(true);
    }
    // Réinitialisez l'état pour enlever la classe "selected-answer" sur les options
    setAnswerId(null);
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
    setCurrentQuestion(0);
  };

  return (
    <div className="container">
      {!showResult ? (
        <>
          <img src={photo} alt="photomoi" />
          <div className="question-container">
            <div className="nb-question">
              <span>{currentQuestion + 1}/</span>
              <span>{questions.length}</span>
            </div>
            <h2 className="question">{question}</h2>
          </div>
          <div className="option">
            <ul>
              {options.map((answer, index) => (
                <li
                  onClick={() => onAnswerClick(answer, index)}
                  key={answer}
                  className={`${
                    answerId === index
                      ? "selected-answer"
                      : showAnswers && answer === reponse
                      ? "correct-answer"
                      : showAnswers && answer !== reponse
                      ? "incorrect-answer"
                      : null
                  }`}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="button-container">
            <button onClick={onClickNext} disabled={answerId === null}>
              {currentQuestion === questions.length - 1 ? "Fin" : "Suite"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <p>
            Vous avez eux{" "}
            <span>
              {result.correctAnswer}/{questions.length}
            </span>
          </p>
          <p>
            {averageScore === 50
              ? "Pile poil"
              : averageScore >= 50
              ? "Bien joué !"
              : "Dommage"}
          </p>
          <button onClick={onTryAgain}>Recommencer ?</button>
        </div>
      )}
    </div>
  );
};

export default Quizz;
