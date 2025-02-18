import Header from "./Header";
import StartMenu from "./StartMenu";
import Question from "./Question";
import Completed from "./Completed";
import { useReducer, useEffect, createContext } from "react";

// VARIABLES
const initialState = {
  status: "ready",
  subject: null,
  index: 0,
  score: 0,
  userAnswer: null,
  isLightTheme: true,
};

// CONTEXTS
export const ThemeContext = createContext();

// REDUCER
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
      return {
        ...initialState,
        isLightTheme: state.isLightTheme,
      };

    case "setPreferredTheme":
      return { ...state, isLightTheme: action.payload };

    case "changeColorTheme":
      const newTheme = !state.isLightTheme;
      localStorage.setItem("theme", newTheme ? "light" : "dark");
      return { ...state, isLightTheme: newTheme };

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
    // Check local storage for theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      dispatch({ type: "setPreferredTheme", payload: savedTheme === "light" });
    } else {
      // Detect system preference if no local storage value
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Update 'isLightTheme' state
      dispatch({ type: "setPreferredTheme", payload: !prefersDark });
    }
  }, []);

  useEffect(() => {
    // Change the background color
    document.body.classList.toggle("pickled-bluewood-bg", !isLightTheme);

    // Change the pattern background
    document.body.classList.toggle("dark-pattern-bg", !isLightTheme);
  }, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{ isLightTheme }}>
      <div className="app">
        <Header status={status} subjectObj={subject} dispatch={dispatch} />
        {status === "ready" && <StartMenu dispatch={dispatch} />}
        {status === "active" && (
          <Question dispatch={dispatch} subjectObj={subject} index={index} />
        )}
        {status === "completed" && (
          <Completed subjectObj={subject} score={score} dispatch={dispatch} />
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
