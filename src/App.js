import React, { useState } from "react";
import Quizz from "./components/Quizz";
import { QuizzData } from "./Data/QuizzData";
import Presentation from "./components/Presentation";
import "./App.css";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="App">
      {quizStarted ? (
        <Quizz questions={QuizzData} />
      ) : (
        <Presentation onStartQuiz={() => setQuizStarted(true)} />
      )}
    </div>
  );
}

export default App;
