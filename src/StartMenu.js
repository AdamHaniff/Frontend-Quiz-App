import data from "./data/data";
import Subject from "./Subject";

function StartMenu() {
  return (
    <div className="start-menu">
      <div className="greeting">
        <h1 className="greeting__text">
          Welcome to the
          <span className="greeting__text--medium-bold">Frontend Quiz!</span>
        </h1>
        <span className="greeting__instruction">
          Pick a subject to get started.
        </span>
      </div>
      <div className="start-menu__subjects">
        {data.quizzes.map((quiz) => (
          <div className="subject__container" key={quiz.title}>
            <Subject quizObj={quiz} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartMenu;
