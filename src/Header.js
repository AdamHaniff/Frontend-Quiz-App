import Subject from "./Subject";
import ColorTheme from "./ColorTheme";

function Header() {
  return (
    <header className="header">
      <div className="header__subject-theme">
        <Subject />
        <ColorTheme />
      </div>
    </header>
  );
}

export default Header;
