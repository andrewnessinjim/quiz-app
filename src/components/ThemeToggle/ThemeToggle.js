import { styled } from "styled-components";

const Wrapper = styled.div``;
const StLabel = styled.label`
  color: ${(p) => p.theme.colors.plum12};
`;
function ThemeToggle({ isDarkTheme, setIsDarkTheme }) {
  return (
    <Wrapper>
      <input
        type="checkbox"
        id="checkbox-theme"
        checked={isDarkTheme}
        onChange={(e) => setIsDarkTheme(e.target.checked)}
      />
      <StLabel for="checkbox-theme">Dark Theme</StLabel>
    </Wrapper>
  );
}

export default ThemeToggle;
