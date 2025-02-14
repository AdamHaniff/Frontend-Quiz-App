function Button({ children, onClick, isLightTheme }) {
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
