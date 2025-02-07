import Subject from "./Subject";
import ColorTheme from "./ColorTheme";

function Header({ status, subjectObj }) {
  return (
    <header className="header">
      <div className="header__subject-theme">
        {status !== "ready" && <Subject subjectObj={subjectObj} />}
        <ColorTheme />
      </div>
    </header>
  );
}

export default Header;
