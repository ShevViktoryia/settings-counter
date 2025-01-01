import styled from "styled-components";

export const Input = () => {
  return <InputStyled type="number" name="value" value="0" />;
};

const InputStyled = styled.input`
  border-radius: 5px;
  &:focus,
  &:focus-visible {
    outline-color: #1babdb;
  }
`;
