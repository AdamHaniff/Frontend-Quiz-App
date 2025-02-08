import Header from "./Header";
import StartMenu from "./StartMenu";
import Question from "./Question";
import Completed from "./Completed";
import { useReducer } from "react";

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

    default:
      throw new Error("Action unknown");
  }
}

function App() {
  // STATE
  const [
    { status, subject, index, score, userAnswer, isLightTheme },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Header status={status} subjectObj={subject} />
      {status === "ready" && <StartMenu dispatch={dispatch} />}
      {status === "active" && (
        <Question dispatch={dispatch} subjectObj={subject} index={index} />
      )}
      {/* <Completed /> */}
    </div>
  );
}

export default App;
