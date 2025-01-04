import styled from "styled-components";

type ControlInputType = {
  title: string;
  value: number;
  changeCount: (newCount: number) => void;
};

export const ControlInput = (props: ControlInputType) => {
  return (
    <ControlInputStyled>
      <p>{props.title + " value"}: </p>
      <input
        type="number"
        value={props.value}
        onChange={(e) => props.changeCount(Number(e.currentTarget.value))}
      />
    </ControlInputStyled>
  );
};

const ControlInputStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    border-radius: 5px;
    &:focus,
    &:focus-visible {
      outline-color: #1babdb;
    }
  }
`;
