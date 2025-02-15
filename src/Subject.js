import { useContext } from "react";
import { ThemeContext } from "./App";

function Subject({ subjectObj = {} }) {
  // VARIABLES
  const { title, icon, bgColor } = subjectObj;
  const { isLightTheme } = useContext(ThemeContext);

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
