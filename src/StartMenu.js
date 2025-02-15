import { useContext } from "react";
import data from "./data/data";
import Subject from "./Subject";
import { ThemeContext } from "./App";

function StartMenu({ dispatch }) {
  // VARIABLES
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <div className="start-menu">
      <div className="greeting">
        <h1 className={`greeting__text ${!isLightTheme ? "white-color" : ""}`}>
          Welcome to the
          <span className="greeting__text--medium-bold">Frontend Quiz!</span>
        </h1>
        <span
          className={`greeting__instruction ${
            !isLightTheme ? "cloudy-blue-color" : ""
          }`}
        >
          Pick a subject to get started.
        </span>
      </div>
      <div className="start-menu__subjects">
        {data.quizzes.map((quiz) => (
          <div
            className={`subject__container ${
              !isLightTheme ? "river-bed-bg box-shadow-dark" : ""
            }`}
            key={quiz.title}
            onClick={() => dispatch({ type: "quizStarted", payload: quiz })}
          >
            <Subject subjectObj={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartMenu;
