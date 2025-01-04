import { useEffect, useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";
import { ControlCounter } from "./components/ControlCounter";

function App() {
  const minValue = localStorage.getItem("min value");
  const maxValue = localStorage.getItem("max value");
  let [minCount, setMinCount] = useState<number>(
    minValue ? JSON.parse(minValue) : 0
  );
  let [maxCount, setMaxCount] = useState<number>(
    maxValue ? JSON.parse(maxValue) : 5
  );

  let [count, setCount] = useState<number>(minCount);
  const [settings, setSettins] = useState<boolean>(false);
  const [readyForWork, setReadyForWork] = useState<boolean>(false);

  useEffect(() => {
    debugger;
    let minValue = localStorage.getItem("min value");
    let maxValue = localStorage.getItem("max value");
    console.log(minValue, maxValue);
    if (minValue && maxValue) {
      setMinCount(JSON.parse(minValue));
      setMaxCount(JSON.parse(maxValue));
    }
  }, []);

  const increaseCountHandler = () =>
    count < maxCount
      ? setCount((prevCount) => Math.min(prevCount + 1, maxCount))
      : count;
  const resetCountHandler = () => {
    setCount(minCount);
  };

  const setMinMax = (newMin: number, newMax: number) => {
    setMinCount(newMin);
    setMaxCount(newMax);
    setCount(minCount);
    setSettins(false);
    setReadyForWork(true);
    localStorage.setItem("min value", JSON.stringify(newMin));
    localStorage.setItem("max value", JSON.stringify(newMax));
  };

  const handleMinChange = (n: number) => {
    setMinCount(n);
    setSettins(true);
    setReadyForWork(false);
  };

  const handleMaxChange = (n: number) => {
    setMaxCount(n);
    setSettins(true);
    setReadyForWork(false);
  };
  return (
    <div className="App">
      <ControlCounter
        maxCount={maxCount}
        minCount={minCount}
        settings={settings}
        changeMinCount={handleMinChange}
        changeMaxCount={handleMaxChange}
        setMinMax={setMinMax}
      />
      <Counter
        count={count}
        maxCount={maxCount}
        minCount={minCount}
        settings={settings}
        readyForWork={readyForWork}
        updateCount={increaseCountHandler}
        resetCount={resetCountHandler}
      />
    </div>
  );
}

export default App;
