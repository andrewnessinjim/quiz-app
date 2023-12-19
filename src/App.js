import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizProgress from "./components/QuizProgress";
import QuestionCards from "./components/QuestionCards";

export default function App() {
  return (
    <AppThemeProvider>
      <Header />
      <QuestionCards />
      <QuizProgress total={10} completed={2} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
