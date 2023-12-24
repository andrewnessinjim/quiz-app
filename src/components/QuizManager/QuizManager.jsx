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
`;

const StProgessContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  display: flex;
`;

const StSubmitButton = styled(StButton)`
  justify-self: center;
`;

function QuizManager() {
  const [answers, setAnswers] = React.useState(
    new Array(data.length).fill(null)
  );

  console.log({ answers });
  const completedCount = answers.filter((answer) => answer !== null).length;

  function onAnswerSelect(questionIndex, selectedAnswer) {
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = selectedAnswer;
    setAnswers(nextAnswers);
  }
  return (
    <Wrapper>
      <QuestionCards data={data} onAnswerSelect={onAnswerSelect} />
      <StProgessContainer>
        <QuizProgress total={data.length} completed={completedCount} />
        <StSubmitButton>Submit</StSubmitButton>
      </StProgessContainer>
    </Wrapper>
  );
}

export default QuizManager;
