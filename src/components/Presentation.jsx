import React from "react";
import "./Presentation.css";
import img from "../Data/photo/IMG_2829.JPG";

const Presentation = ({ onStartQuiz }) => {
  return (
    <div className="presentation-container">
      <img src={img} />
      <h1>Bienvenue le Quiz de MOI</h1>
      <p>Pensez a moi, ce que j'aime, qui je suis et c'est partit, YOUPII !!</p>
      <button onClick={onStartQuiz}>Commencer</button>
    </div>
  );
};

export default Presentation;
