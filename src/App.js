import AppThemeProvider from "./components/AppThemeProvider";

import GlobalStyles from "./GlobalStyles";
import React from "react";
import Header from "./components/Header";
import QuizProgress from "./components/QuizProgress";
import QuestionCards from "./components/QuestionCards";

import data from "./data";

export default function App() {
  const [answers, setAnswers] = React.useState(
    new Array(data.length).fill(null)
  );
  const completedCount = answers.filter((answer) => answer !== null).length;

  function onAnswerSelect(questionIndex, selectedAnswer) {
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = selectedAnswer;
    setAnswers(nextAnswers);
    console.log(`${selectedAnswer} selected for ${questionIndex}`);
  }

  return (
    <AppThemeProvider>
      <Header />
      <QuestionCards data={data} onAnswerSelect={onAnswerSelect} />
      <QuizProgress total={data.length} completed={completedCount} />
      <GlobalStyles />
    </AppThemeProvider>
  );
}
