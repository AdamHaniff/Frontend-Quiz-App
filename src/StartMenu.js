import data from "./data/data";
import Subject from "./Subject";

function StartMenu() {
  return (
    <div className="start-menu">
      <div className="greeting">
        <h1 className="greeting__text">Welcome to the Frontend Quiz!</h1>
        <span className="greeting__instruction">
          Pick a subject to get started.
        </span>
      </div>
      <div className="start-menu__subjects">
        {data.quizzes.map((quiz) => (
          <div className="subject-container">
            <Subject quizObj={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartMenu;
