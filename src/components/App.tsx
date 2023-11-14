import { Board } from "./Board";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Board numCols={5} numRows={5} />
    </div>
  );
};

export default App;
