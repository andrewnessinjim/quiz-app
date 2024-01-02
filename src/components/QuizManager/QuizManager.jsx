import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import DiscreteProgress from "../DiscreteProgress";
import QuizNavigator from "./QuizNavigator";

import questionsData from "../../data";
import SiteWidthWrapper from "../SiteWidthWrapper";
import StButton from "../StButton/StButton";

const Wrapper = styled.div`
  ${SiteWidthWrapper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
`;

const StProgessContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
  gap: 16px;
`;

const StSubmitButton = styled(StButton)`
  justify-self: center;
`;

const StQuizStatus = styled.div`
  @keyframes zoom-out-in {
    from {
      transform: scale(2);
    }
    to {
      transform: scale(1);
    }
  }

  display: flex;
  gap: 16px;
  align-items: center;
  animation-name: zoom-out-in;
  animation-duration: 500ms;
`;

function QuizManager({onReset}) {
  const numQuestions = questionsData.length;
  const [providedAnswers, setProvidedAnswers] = React.useState(
    new Array(numQuestions).fill(null)
  );

  const [quizSubmitted, setQuizSubmitted] = React.useState(false);

  const providedAnswersCount = providedAnswers.filter((answer) => answer !== null).length;
  const [score, setScore] = React.useState(0);

  const isReadyForSubmission = numQuestions === providedAnswersCount;

  function onAnswerPick(questionIndex, selectedAnswer) {
    const nextAnswers = [...providedAnswers];
    nextAnswers[questionIndex] = selectedAnswer;
    setProvidedAnswers(nextAnswers);
  }

  function onSubmit() {
    const correctAnswers = questionsData.map(question => question.correctAnswer);
    let score = 0;
    providedAnswers.forEach((providedAnswer, index) => {
      if(providedAnswer === correctAnswers[index]) {
        score++;
      }
    });

    setQuizSubmitted(true);
    setScore(score);
    console.log({ score })
  }

  return (
    <Wrapper>
      <StProgessContainer>
        <DiscreteProgress total={questionsData.length} completed={providedAnswersCount} />
      </StProgessContainer>
      <QuizNavigator
        questionsData={questionsData}
        onAnswerPick={onAnswerPick}
        disableNav={quizSubmitted} />
      {isReadyForSubmission && !quizSubmitted &&
        <StSubmitButton
          onClick={onSubmit}>
            Submit
        </StSubmitButton>}
      { quizSubmitted &&
          <StQuizStatus>
            {`You scored ${score}/${numQuestions}`}
            <StButton onClick={onReset}>Retry</StButton>
          </StQuizStatus>
      }
    </Wrapper>
  );
}

QuizManager.propTypes = {
  onReset: PropTypes.func
}

export default QuizManager;
