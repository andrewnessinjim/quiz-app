import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizManager from "./components/QuizManager";
import useReset from "./hooks/useReset";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`;

export default function App() {
  const [resetKey, handleReset] = useReset()
  return (
    <AppThemeProvider>
      <Wrapper>
        <Header />
        <QuizManager key={resetKey} onReset={handleReset} />
      </Wrapper>
      <GlobalStyles />
    </AppThemeProvider>
  );
}
