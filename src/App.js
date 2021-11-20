import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
const { useState } = React;


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
        {count}
      </h1>
      <div className="wrapper">
        <h2 className={count % 2 === 0 ? "blue" : "red"}>Введено {count % 2 === 0 ? 'четное' : 'нечетное' } число</h2>
      </div>
      <div className="button__wrapper">
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>  
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
