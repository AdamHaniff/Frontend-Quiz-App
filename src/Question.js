import Option from "./Option";
import Button from "./Button";
import { useState, useContext } from "react";
import { ThemeContext } from "./App";

function Question({ dispatch, subjectObj, index }) {
  // STATE
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);

  // VARIABLES
  const { questions } = subjectObj;
  const question = questions[index].question;
  const questionNumber = index + 1;
  const numberOfQuestions = questions.length;
  const options = questions[index].options;
  const answer = questions[index].answer;
  const onLastQuestion = questionNumber === numberOfQuestions;
  const { isLightTheme } = useContext(ThemeContext);

  // HANDLER FUNCTIONS
  function handleOptionSelect(i) {
    setSelectedIndex((prevIndex) => (prevIndex === i ? null : i));

    // Hide the error if it is currently being displayed
    setIsErrorDisplayed(false);
  }

  function handleSubmitAnswer() {
    // Display error and don't submit if user hasn't selected an answer
    if (selectedIndex === null) {
      setIsErrorDisplayed(true);
      return;
    }

    setIsSubmitted(true);
    dispatch({ type: "answerSubmitted", payload: options[selectedIndex] });
  }

  function handleNextQuestion() {
    // Make the currently focused element lose focus
    document.activeElement.blur();

    // Reset 'selectedIndex' and 'isSubmitted'
    setSelectedIndex(null);
    setIsSubmitted(false);

    dispatch({ type: "nextQuestion" });
  }

  function handleViewScore() {
    // Reset 'selectedIndex' and 'isSubmitted'
    setSelectedIndex(null);
    setIsSubmitted(false);

    dispatch({ type: "quizCompleted" });
  }

  return (
    <div className="question">
      <div className="question__number-text-progress">
        <span
          className={`question__number ${
            !isLightTheme ? "cloudy-blue-color" : ""
          }`}
        >
          Question {questionNumber} of {numberOfQuestions}
        </span>
        <p className={`question__text ${!isLightTheme ? "white-color" : ""}`}>
          {question}
        </p>
        <div
          className={`question__progress-container ${
            !isLightTheme ? "river-bed-bg" : ""
          }`}
        >
          <progress
            className="question__progress"
            value={questionNumber}
            max={numberOfQuestions}
          ></progress>
        </div>
      </div>
      <div className="question__options-submit-error">
        <div className="question__options">
          {options.map((option, index) => (
            <Option
              key={index}
              option={option}
              index={index}
              isSelected={selectedIndex === index}
              onSelect={() => handleOptionSelect(index)}
              isCorrect={
                isSubmitted && selectedIndex === index && option === answer
              }
              isIncorrect={
                isSubmitted && selectedIndex === index && option !== answer
              }
              showCorrect={isSubmitted && option === answer}
              disabled={isSubmitted}
            />
          ))}
        </div>
        <Button
          onClick={
            onLastQuestion && isSubmitted
              ? handleViewScore
              : !isSubmitted
              ? handleSubmitAnswer
              : handleNextQuestion
          }
        >
          {onLastQuestion && isSubmitted
            ? "View Score"
            : !isSubmitted
            ? "Submit Answer"
            : "Next Question"}
        </Button>
        {isErrorDisplayed && (
          <div className="question__error-icon-text">
            <svg
              className="question__error-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                fill="#EE5454"
                d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
              />
            </svg>
            <span
              className={`question__error-text ${
                !isLightTheme ? "white-color" : ""
              }`}
            >
              Please select an answer
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
