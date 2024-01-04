import React from "react";
import PropTypes from "prop-types";
import { css, styled } from "styled-components";

import * as Toggle from "@radix-ui/react-toggle";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

import { AppThemeContext } from "../AppThemeProvider";

const StToggleRoot = styled(Toggle.Root)`
  width: 80px;
  height: 40px;
  border-radius: 1000px;
  border: none;
  padding: 4px;
  background-color: ${(p) => p.theme.colors.mauve4};
  position: relative;
  box-sizing: content-box;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
  position: absolute;
`;

const iconStyles = css`
  stroke: ${(p) => p.theme.colors.plum10};
  stroke-width: 1px;
  height: 100%;
  width: 30%;
  opacity: 0.25;
`;

const StSunIcon = styled(SunIcon)`
  ${iconStyles};
`;

const StMoonIcon = styled(MoonIcon)`
  ${iconStyles};
`;

const StThemeIndicator = styled.div`
  box-sizing: content-box;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1000px;
  background: ${(p) => p.theme.colors.plum7};
  transition: 150ms transform ease-in;
  opacity: 0.8;

  ${StToggleRoot}[data-state="on"] & {
    transform: translateX(100%);
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
