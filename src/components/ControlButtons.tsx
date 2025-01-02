import styled from "styled-components";
import { Button } from "./Button";

type ButtonProps = {
  count: number;
  maxCount: number;
  minCount: number;
  updateCount?: () => void;
  resetCount?: () => void;
};

export const ControlButtons = (props: ButtonProps) => {
  return (
    <ControlButtonsStyled>
      <Button
        title="increase"
        onClick={props.updateCount}
        isDisable={props.count === props.maxCount}
      />
      <Button
        title="reset"
        isDisable={props.count === 0}
        onClick={props.resetCount}
      />
    </ControlButtonsStyled>
  );
};

export const ControlButtonsStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #1babdb;
`;
