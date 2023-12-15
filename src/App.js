import AppThemeProvider from "./components/AppThemeProvider";
import QuestionCard from "./components/QuestionCard";
import data from "./data";
import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizProgress from "./components/QuizProgress";

export default function App() {
  return (
    <AppThemeProvider>
      <div>
        <Header />
        <QuestionCard question={data[0].question} choices={data[0].choices} />
        <QuizProgress total={10} completed={2} />
        <GlobalStyles />
      </div>
    </AppThemeProvider>
  );
}
