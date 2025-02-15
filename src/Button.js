import { useContext } from "react";
import { ThemeContext } from "./App";

function Button({ children, onClick }) {
  // VARIABLES
  const { isLightTheme } = useContext(ThemeContext);

  return (
    <button
      className={`question-completed-btn ${
        !isLightTheme ? "box-shadow-dark" : ""
      }`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
