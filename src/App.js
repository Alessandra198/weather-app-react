import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello From App</h1>
        <Weather city="New York"/>
      </header>
    </div>
  );
}

export default App;
