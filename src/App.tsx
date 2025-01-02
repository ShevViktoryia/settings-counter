import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";

function App() {
  let [minCount, setMinCount] = useState<number>(0);
  let [maxCount, setMaxCount] = useState<number>(5);

  let [count, setCount] = useState<number>(minCount);

  const increaseCountHandler = () =>
    count < maxCount
      ? setCount((prevCount) => Math.min(prevCount + 1, maxCount))
      : count;
  const resetCountHandler = () => {
    setCount(0);
  };

  const setMinMax = (newMin: number, newMax: number) => {
    setMinCount(newMin);
    setMaxCount(newMax);
    setCount(minCount);
  };

  const handleMinChange = (n: number) => {
    setMinCount(n);
  };

  const handleMaxChange = (n: number) => {
    setMaxCount(n);
  };

  return (
    <div className="App">
      <ControlCounter
        maxCount={maxCount}
        minCount={minCount}
        changeMinCount={handleMinChange}
        changeMaxCount={handleMaxChange}
        setMinMax={setMinMax}
      />
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
