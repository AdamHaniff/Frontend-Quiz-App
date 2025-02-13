function Subject({ subjectObj = {}, isLightTheme }) {
  // VARIABLES
  const { title, icon, bgColor } = subjectObj;

  return (
    <div className="subject">
      <div className="subject__icon-container" style={{ background: bgColor }}>
        <img className="subject__icon" src={icon} alt="Subject icon" />
      </div>
      <span className={`subject__name ${!isLightTheme ? "white-color" : ""}`}>
        {title}
      </span>
    </div>
  );
}

export default Subject;
