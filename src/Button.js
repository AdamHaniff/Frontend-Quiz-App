function Button({ children, onClick }) {
  return (
    <button className="question-completed-btn" type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
