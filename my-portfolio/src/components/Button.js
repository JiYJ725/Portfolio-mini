import styled from "styled-components";

const ButtonContainer = styled.button`
  font: inherit;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: 1px solid #002366;
  color: white;
  background: #002366;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }
  &:hover,
  &:active {
    background: #4169e1;
    border-color: #4169e1;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

const Button = ({ label }) => {
  return <ButtonContainer>{label}</ButtonContainer>;
};

export default Button;
