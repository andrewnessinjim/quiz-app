import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizManager from "./components/QuizManager";
import useReset from "./hooks/useReset";

export default function App() {
  const [resetKey, handleReset] = useReset()
  return (
    <AppThemeProvider>
      <Header />
      <QuizManager key={resetKey} onReset={handleReset} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
