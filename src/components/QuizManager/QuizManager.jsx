import React from "react";

import QuizProgress from "..//QuizProgress";
import QuestionCards from "../QuestionCards";

import data from "../../data";

function QuizManager() {
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
    <>
      <QuestionCards data={data} onAnswerSelect={onAnswerSelect} />
      <QuizProgress total={data.length} completed={completedCount} />
    </>
  );
}

export default QuizManager;
