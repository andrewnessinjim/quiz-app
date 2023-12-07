import { styled, ThemeProvider } from "styled-components";
import QuestionCard from "./components/QuestionCard";
import data from "./data";
import { mauve, mauveDark, plum, plumDark } from "@radix-ui/colors";
import GlobalStyles from "./GlobalStyles";
import React from "react";
import ThemeToggle from "./components/ThemeToggle";

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

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);
  const selectedTheme = isDarkTheme ? darkTheme : lightTheme;

  console.log({ isDarkTheme });
  return (
    <ThemeProvider theme={selectedTheme}>
      <ThemeToggle isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      <QuestionCard question={data[0].question} choices={data[0].choices} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
