import styled from "styled-components";
import { Input } from "./Input";

type ControlInputType = {
  title: string;
};

export const ControlInput = (props: ControlInputType) => {
  return (
    <ControlInputStyled>
      <p>{props.title}: </p>
      <Input />
    </ControlInputStyled>
  );
};

const ControlInputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
