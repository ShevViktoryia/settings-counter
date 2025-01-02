import styled from "styled-components";

type CounterProps = {
  count: number;
  maxCount: number;
  minCount: number;
};

export const CounterField = (props: CounterProps) => {
  return (
    <CounterFieldStyled
      style={{
        backgroundColor:
          props.count === props.maxCount ||
          props.minCount < 0 ||
          props.minCount === props.maxCount
            ? "red"
            : "#1babdb",
      }}
    >
      {props.minCount >= 0 && props.minCount !== props.maxCount
        ? props.count
        : "Incorrect value!"}
    </CounterFieldStyled>
  );
};

const CounterFieldStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
