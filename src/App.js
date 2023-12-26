import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizResetController from "./components/QuizResetController";

export default function App() {
  return (
    <AppThemeProvider>
      <Header />
      <QuizResetController />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
