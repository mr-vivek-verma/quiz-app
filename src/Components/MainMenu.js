import React, { useContext } from "react";
import { QuizContext } from "../Components/ContextAPI/Context";
import "../App.css";

function MainMenu() {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <div className="Menu">
      <button
        onClick={() => {
          setQuizState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
