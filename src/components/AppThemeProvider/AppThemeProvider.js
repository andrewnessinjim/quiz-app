import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { mauve, mauveDark, plum, plumDark } from "@radix-ui/colors";

export const AppThemeContext = React.createContext();

const lightTheme = {
  colors: {
    ...plum,
    ...mauve,
  },
};

const darkTheme = {
  colors: {
    ...plumDark,
    ...mauveDark,
  },
};

function AppThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <AppThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </AppThemeContext.Provider>
  );
}

AppThemeProvider.propTypes = {
  children: PropTypes.element,
};
export default AppThemeProvider;
