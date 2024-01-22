/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import QuizCard from "../QuizCard";
import questionsData from "../../data";
import SiteWidthWrapper from "../SiteWidthWrapper";
import ActionBar from "./ActionBar";
import StatusBar from "./StatusBar";
import QuizNavigator from "../QuizNavigator/QuizNavigator";

const Wrapper = styled.div`
  ${SiteWidthWrapper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:clamp(1.5rem, 3.6vw + 0.6rem, 2rem);

  @keyframes zoom-in {
    from {
      transform: scale(0);
    }
    to {
      opacity: scale(1);
    }
  }

  animation-name: zoom-in;
  animation-duration: 500ms;
  flex-grow: 1;
  min-height: 0;
`;

function QuizManager({ onReset }) {
  const numQuestions = questionsData.length;
  const [providedAnswers, setProvidedAnswers] = React.useState(
    new Array(numQuestions).fill(null)
  );

  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const providedAnswersCount = providedAnswers.filter((answer) => answer !== null).length;
  const isReadyForSubmission = numQuestions === providedAnswersCount;

  //Valid values: from-left, from-right
  const [cardAnimationDirection, setCardAnimationDirection] = React.useState("from-left")
  function onAnswerPick(questionIndex, selectedAnswer) {
    const nextAnswers = [...providedAnswers];
    nextAnswers[questionIndex] = selectedAnswer;
    setProvidedAnswers(nextAnswers);
  }

  function onSubmit() {
    const correctAnswers = questionsData.map(question => question.correctAnswer);
    let score = 0;
    providedAnswers.forEach((providedAnswer, index) => {
      if (providedAnswer === correctAnswers[index]) {
        score++;
      }
    });

    setQuizSubmitted(true);
    setScore(score);
  }
  
  return (
    <Wrapper>
      <QuizCard
        questionData={questionsData[currentQuestion]}
        questionIndex={currentQuestion}
        onAnswerPick={onAnswerPick}
        disablePicking={quizSubmitted}
        cardAnimationDirection={cardAnimationDirection}
        style={{
          flexGrow: 1,
          minHeight: 0
        }}
      />
      <StatusBar
        showProgress={!quizSubmitted}
        total={numQuestions}
        completed={providedAnswersCount}

        showScore={quizSubmitted}
        score={score}
      />
      <QuizNavigator 
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        totalQuestions={numQuestions}
        cardAnimationDirection={cardAnimationDirection}
        setCardAnimationDirection={setCardAnimationDirection}/>
      <ActionBar
        showSubmitButton={isReadyForSubmission && !quizSubmitted}
        showResetButton={quizSubmitted}
        onSubmit={onSubmit}
        onReset={onReset}
      />
    </Wrapper>
  );
}

QuizManager.propTypes = {
  onReset: PropTypes.func
}

export default QuizManager;
