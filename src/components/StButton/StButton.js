import styled from "styled-components";

const StButton = styled.button`
  padding: 8px 16px;
  width: 124px;
  color: ${({ theme }) => theme.colors.mauve12};
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.plum7};
  cursor: pointer;

  &[disabled] {
    opacity: 0.75;
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }
`;

export default StButton;
