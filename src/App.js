import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import ResetController from "./components/ResetController/ResetController";
import QuizManager from "./components/QuizManager";

export default function App() {
  return (
    <AppThemeProvider>
      <Header />
      <ResetController ControlledComponent={QuizManager}/>
      <GlobalStyles />
    </AppThemeProvider>
  );
}
