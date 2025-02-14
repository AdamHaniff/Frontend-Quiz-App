import Header from "./Header";
import StartMenu from "./StartMenu";
import Question from "./Question";
import Completed from "./Completed";
import { useReducer, useEffect } from "react";

const initialState = {
  status: "ready",
  subject: null,
  index: 0,
  score: 0,
  userAnswer: null,
  isLightTheme: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "quizStarted":
      return { ...state, status: "active", subject: action.payload };

    case "answerSubmitted":
      const answer = state.subject.questions[state.index].answer;
      return {
        ...state,
        userAnswer: action.payload,
        score: action.payload === answer ? state.score + 1 : state.score,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        userAnswer: null,
      };

    case "quizCompleted":
      return {
        ...state,
        status: "completed",
        userAnswer: null,
      };

    case "playAgain":
      return initialState;

    case "changeColorTheme":
      return { ...state, isLightTheme: !state.isLightTheme };

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  // STATE
  const [{ status, subject, index, score, isLightTheme }, dispatch] =
    useReducer(reducer, initialState);

  // EFFECTS
  useEffect(() => {
    // Change the background color
    document.body.classList.toggle("pickled-bluewood-bg", !isLightTheme);

    // Change the pattern background
    document.body.classList.toggle("dark-pattern-bg", !isLightTheme);
  }, [isLightTheme]);

  return (
    <div className="app">
      <Header
        status={status}
        subjectObj={subject}
        dispatch={dispatch}
        isLightTheme={isLightTheme}
      />
      {status === "ready" && (
        <StartMenu dispatch={dispatch} isLightTheme={isLightTheme} />
      )}
      {status === "active" && (
        <Question
          dispatch={dispatch}
          subjectObj={subject}
          index={index}
          isLightTheme={isLightTheme}
        />
      )}
      {status === "completed" && (
        <Completed
          subjectObj={subject}
          score={score}
          dispatch={dispatch}
          isLightTheme={isLightTheme}
        />
      )}
    </div>
  );
}

export default App;
