import AppThemeProvider from "./components/AppThemeProvider";
import QuestionCard from "./components/QuestionCard";
import data from "./data";
import GlobalStyles from "./GlobalStyles";
import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import QuizProgressPlayground from "./components/QuizProgressPlayground";

export default function App() {
  return (
    <AppThemeProvider>
      <ThemeToggle />
      <QuestionCard question={data[0].question} choices={data[0].choices} />
      <QuizProgressPlayground />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
