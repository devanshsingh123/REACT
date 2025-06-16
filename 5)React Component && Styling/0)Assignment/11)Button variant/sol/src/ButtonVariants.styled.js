import styled from "styled-components";

export const ButtonView = styled.button`
  background-color: ${(props) => (props.filled ? props.bg : "#fff")};
  color: ${(props) => (props.filled ? props.color : "#000")};
  border: ${(props) => (props.filled ? props.border || "none" : "1px solid #000")};
`;
