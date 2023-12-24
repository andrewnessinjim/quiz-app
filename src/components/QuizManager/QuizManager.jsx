import React from "react";

import QuizProgress from "../QuizProgress";
import QuestionCards from "../QuestionCards";

import data from "../../data";
import styled from "styled-components";
import SiteWidthWrapper from "../SiteWidthWrapper";
import StButton from "../StButton/StButton";

const Wrapper = styled.div`
  ${SiteWidthWrapper};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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

function QuizManager() {
  const [providedAnswers, setProvidedAnswers] = React.useState(
    new Array(data.length).fill(null)
  );

  const completedCount = providedAnswers.filter((answer) => answer !== null).length;

  function onAnswerSelect(questionIndex, selectedAnswer) {
    const nextAnswers = [...providedAnswers];
    nextAnswers[questionIndex] = selectedAnswer;
    setProvidedAnswers(nextAnswers);
  }

  function onSubmit() {
    const correctAnswers = data.map(question => question.correctAnswer);
    let score = 0;
    providedAnswers.forEach((providedAnswer, index) => {
      if(providedAnswer === correctAnswers[index]) {
        score++;
      }
    })
    console.log({ score })
  }

  return (
    <Wrapper>
      <QuestionCards data={data} onAnswerSelect={onAnswerSelect} />
      <StProgessContainer>
        <QuizProgress total={data.length} completed={completedCount} />
        <StSubmitButton
          onClick={onSubmit}
          disabled={completedCount < data.length}>
            Submit
        </StSubmitButton>
      </StProgessContainer>
    </Wrapper>
  );
}

export default QuizManager;
