import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";

function App() {
  const maxCount = 5;
  const minCount = 0;
  let [count, setCount] = useState<number>(minCount);

  const increaseCountHandler = () =>
    count < 5
      ? setCount((prevCount) => Math.min(prevCount + 1, maxCount))
      : count;
  const resetCountHandler = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <ControlCounter />
      <Counter
        count={count}
        maxCount={maxCount}
        minCount={minCount}
        updateCount={increaseCountHandler}
        resetCount={resetCountHandler}
      />
    </div>
  );
}

export default App;
