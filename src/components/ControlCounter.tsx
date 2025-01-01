import styled from "styled-components";
import { ControlInputs } from "./ControlInputs";
import { ControlButtonsStyled } from "./ControlButtons";
import { Button } from "./Button";

export const ControlCounter = () => {
  return (
    <CounterStyled>
      <ControlInputs />
      <ControlButtonsStyled>
        <Button title="set" />
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
