import styled from "styled-components";
import { ControlInput } from "./ControlInput";

export const ControlInputs = () => {
  return (
    <ControlInputsStyled>
      <ControlInput title="max value" />
      <ControlInput title="min value" />
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
