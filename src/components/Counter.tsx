import styled from "styled-components";
import { CounterField } from "./CounterField";
import { ProgressBar } from "./ProgressBar";
import { ControlButtons } from "./ControlButtons";

type CounterType = {
  count: number;
  maxCount: number;
  minCount: number;
  settings: boolean;
  updateCount: () => void;
  resetCount: () => void;
};

export const Counter = (props: CounterType) => {
  return (
    <CounterStyled>
      <CounterField
        maxCount={props.maxCount}
        minCount={props.minCount}
        count={props.count}
        settings={props.settings}
      />
      <ProgressBar count={props.count} maxCount={props.maxCount} />
      <ControlButtons
        minCount={props.minCount}
        maxCount={props.maxCount}
        count={props.count}
        updateCount={props.updateCount}
        resetCount={props.resetCount}
      />
    </CounterStyled>
  );
};

const CounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border: 2px solid #1babdb;
  padding: 10px;
  border-radius: 10px;
`;
