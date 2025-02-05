function Subject({ quizObj }) {
  // VARIABLES
  const { title, icon, bgColor } = quizObj;

  return (
    <div className="subject">
      <div className="subject__icon-container" style={{ background: bgColor }}>
        <img className="subject__icon" src={icon} alt="Subject icon" />
      </div>
      <span className="subject__name">{title}</span>
    </div>
  );
}

export default Subject;
