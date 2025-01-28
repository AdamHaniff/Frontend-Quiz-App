function Subject({ quizObj }) {
  // VARIABLES
  const { title, icon } = quizObj;

  return (
    <div className="subject">
      <div className="subject__icon-container">
        <img className="subject__icon" src={icon} alt="Subject icon" />
      </div>
      <span className="subject__name">{title}</span>
    </div>
  );
}

export default Subject;
