import Calculator from "./components/Calculator";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Calculator />
      <p />
      <a
          className="App-link"
          href="https://github.com/eggOnion/myCalculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about the App & my learning experiences 
      </a>
    </div>
  );
}

export default App;
