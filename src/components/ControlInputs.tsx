import styled from "styled-components";
import { ControlInput } from "./ControlInput";

type ControlInputsType = {
  maxCount: number;
  minCount: number;
  changeMinCount: (newCount: number) => void;
  changeMaxCount: (newCount: number) => void;
};

export const ControlInputs = (props: ControlInputsType) => {
  return (
    <ControlInputsStyled>
      <ControlInput
        title="max"
        value={props.maxCount}
        changeCount={props.changeMaxCount}
      />
      <ControlInput
        title="min"
        value={props.minCount}
        changeCount={props.changeMinCount}
      />
    </ControlInputsStyled>
  );
};

const ControlInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #1babdb;
  padding: 10px;
  border-radius: 10px;
`;
