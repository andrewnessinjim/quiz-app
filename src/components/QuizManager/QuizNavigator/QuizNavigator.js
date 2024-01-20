import styled from "styled-components";
import PropTypes from "prop-types";

import AnswerPicker from "../AnswerPicker";

import React from "react";
import StButton from "../../StButton/StButton";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const NavContainer = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`;

function QuizNavigator({ questionsData, onAnswerPick, disablePicking, style }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  function isFirstQuestion() {
    return currentQuestion === 0;
  }

  function isLastQuestion() {
    return currentQuestion === questionsData.length - 1;
  }

  const currentQuestionData = questionsData[currentQuestion];

  return (
    <Wrapper
      style={style}>
        <AnswerPicker
          key={currentQuestionData.id}
          question={currentQuestionData.question}
          answers={currentQuestionData.choices}
          questionIndex={currentQuestion}
          onAnswerPick={onAnswerPick}
          disablePicking={disablePicking}
          disableInitialAnimation={!mounted}
        />
      <NavContainer>
        <StButton
          $variant="secondary"
          disabled={isFirstQuestion()}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </StButton>
        <StButton
          $variant="secondary"
          disabled={isLastQuestion()}
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </StButton>
      </NavContainer>
    </Wrapper>
  );
}

QuizNavigator.propTypes = {
  questionsData: PropTypes.arrayOf(PropTypes.object),
  onAnswerPick: PropTypes.func,
  disablePicking: PropTypes.bool,
  style: PropTypes.func
};

export default QuizNavigator;
