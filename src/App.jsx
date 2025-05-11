import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => {
    setCount(prev => prev + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="app">
      <h1>Click Counter App</h1>
      <h2>Count: {count}</h2>
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      {count >= limit && <p>You've reached the limit!</p>}
    </div>
  );
}

export default App;