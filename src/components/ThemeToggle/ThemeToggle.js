import PropTypes from "prop-types";
import React from "react";
import { styled } from "styled-components";

import { AppThemeContext } from "../AppThemeProvider";

const Wrapper = styled.div``;
const StLabel = styled.label`
  color: ${(p) => p.theme.colors.plum12};
`;
function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AppThemeContext);

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

ThemeToggle.propTypes = {
  isDarkTheme: PropTypes.bool,
  setIsDarkTheme: PropTypes.func,
};
export default ThemeToggle;
