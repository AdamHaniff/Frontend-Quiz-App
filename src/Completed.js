import Subject from "./Subject";
import Button from "./Button";
import { useContext } from "react";
import { ThemeContext } from "./App";

function Completed({ subjectObj, score, dispatch }) {
  // VARIABLES
  const { questions } = subjectObj;
  const numberOfQuestions = questions.length;
  const { isLightTheme } = useContext(ThemeContext);

  // HANDLER FUNCTIONS
  function handlePlayAgain() {
    dispatch({ type: "playAgain" });
  }

  return (
    <div className="completed">
      <h2 className={`completed__header ${!isLightTheme ? "white-color" : ""}`}>
        Quiz completed{" "}
        <span className="completed__header--medium-bold">You scored...</span>
      </h2>
      <div className="completed__card-btn">
        <div
          className={`completed__card ${
            !isLightTheme ? "river-bed-bg box-shadow-dark" : ""
          }`}
        >
          <Subject subjectObj={subjectObj} />
          <span
            className={`completed__score ${!isLightTheme ? "white-color" : ""}`}
          >
            {score}
          </span>
          <span
            className={`completed__questions ${
              !isLightTheme ? "cloudy-blue-color" : ""
            }`}
          >
            out of {numberOfQuestions}
          </span>
        </div>
        <Button onClick={handlePlayAgain}>Play Again</Button>
      </div>
    </div>
  );
}

export default Completed;
