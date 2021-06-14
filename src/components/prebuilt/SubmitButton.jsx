import styled from "@emotion/styled";

const SubmitButton = styled.button`
  display: block;
  height: 40px;
  width: 100%;
  font-size: inherit;
  background-color: ${props => (props.disabled ? "" : "white")};

  border-radius: 5px;
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  color: black;
  font-weight: 600;
  cursor: pointer;
`;

export default SubmitButton;
