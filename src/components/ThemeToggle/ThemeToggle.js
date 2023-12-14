import React from "react";
import PropTypes from "prop-types";
import { css, styled } from "styled-components";

import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { AppThemeContext } from "../AppThemeProvider";

const StToggleRoot = styled(Toggle.Root)`
  width: 84px;
  border-radius: 32px;
  border: none;
  padding: 4px;
  background-color: ${(p) => p.theme.colors.mauve4};
  position: relative;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
`;

const iconStyles = css`
  stroke: ${(p) => p.theme.colors.plum10};
  stroke-width: 1px;
  height: 18px;
  width: 18px;
`;
const StSunIcon = styled(SunIcon)`
  ${iconStyles};
`;

const StMoonIcon = styled(MoonIcon)`
  ${iconStyles};
`;

const StThemeIndicator = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.plum7};
  position: absolute;
  top: 4px;
  left: 4px;
  transition: 150ms transform ease-in;
  opacity: 0.8;

  ${StToggleRoot}[data-state="on"] & {
    transform: translateX(46px);
  }
`;

function ThemeToggle() {
  const { isDarkTheme, setIsDarkTheme } = React.useContext(AppThemeContext);

  return (
    <StToggleRoot pressed={isDarkTheme} onPressedChange={setIsDarkTheme}>
      <IconsContainer>
        <StSunIcon />
        <StMoonIcon />
      </IconsContainer>
      <StThemeIndicator />
    </StToggleRoot>
  );
}

ThemeToggle.propTypes = {
  isDarkTheme: PropTypes.bool,
  setIsDarkTheme: PropTypes.func,
};
export default ThemeToggle;
