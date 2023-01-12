import "./App.css";
import { Counter } from "./Components/Counter";
import { User } from "./Components/User";

function App() {
  return (
    <div className="App">
      <User />
      <br />
      <Counter />
    </div>
  );
}

export default App;
