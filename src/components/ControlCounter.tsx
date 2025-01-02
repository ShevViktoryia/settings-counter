import styled from "styled-components";
import { ControlInputs } from "./ControlInputs";
import { ControlButtonsStyled } from "./ControlButtons";
import { Button } from "./Button";

type ControlCounterType = {
  maxCount: number;
  minCount: number;
  setMinMax: (newMin: number, newMax: number) => void;
  changeMinCount: (newCount: number) => void;
  changeMaxCount: (newCount: number) => void;
};

export const ControlCounter = (props: ControlCounterType) => {
  return (
    <CounterStyled>
      <ControlInputs
        maxCount={props.maxCount}
        minCount={props.minCount}
        changeMaxCount={props.changeMaxCount}
        changeMinCount={props.changeMinCount}
      />
      <ControlButtonsStyled>
        <Button
          title="set"
          onClick={() => props.setMinMax(props.minCount, props.maxCount)}
        />
      </ControlButtonsStyled>
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
