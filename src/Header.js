import Subject from "./Subject";
import ColorTheme from "./ColorTheme";

function Header({ status, subjectObj, dispatch, isLightTheme }) {
  return (
    <header className="header">
      <div className="header__subject-theme">
        {status !== "ready" && <Subject subjectObj={subjectObj} />}
        <ColorTheme dispatch={dispatch} isLightTheme={isLightTheme} />
      </div>
    </header>
  );
}

export default Header;
