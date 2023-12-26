import styled from "styled-components";

function getBackground(style, theme) {
  if(style === "secondary") {
    return "none";
  } else {
    return theme.colors.plum7;
  }
}

function getBorder(style, theme) {
  if(style === "secondary") {
    return `2px solid ${theme.colors.plum7}`;
  } else {
    return "none";
  }
}

const StButton = styled.button`
  padding: 8px 16px;
  width: 124px;
  color: ${({ theme }) => theme.colors.mauve12};
  border-radius: 10px;
  border: ${({ theme, $style }) => getBorder($style, theme)};
  background: ${({ theme, $style }) => getBackground($style, theme)};
  cursor: pointer;

  &[disabled] {
    opacity: 0.75;
    border-color: ${({ theme }) => theme.colors.mauve11};
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }
`;

export default StButton;
