import Header from "./Header";
import StartMenu from "./StartMenu";
import Question from "./Question";
import Completed from "./Completed";

function App() {
  return (
    <div className="app">
      <Header />
      <StartMenu />
      <Question />
      <Completed />
    </div>
  );
}

export default App;
