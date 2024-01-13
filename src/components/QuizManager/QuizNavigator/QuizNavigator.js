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

const CardsScroller = styled.section`
  width: var(--question-card-width);
  max-width: var(--question-card-max-width);
  overflow-x: clip;
`;

const CardsContainer = styled.section`
  display: flex;
  width: max-content;
  align-items: start;
  --gap-between-cards: 128px;
  gap: var(--gap-between-cards);
`;

const NavContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`;

function QuizNavigator({ questionsData, onAnswerPick, disableNav }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  function isFirstQuestion(){
    return currentQuestion === 0 ;
  }

  function isLastQuestion() {
    return currentQuestion === questionsData.length - 1;
  }

  return (
    <Wrapper>
      <CardsScroller>
        <CardsContainer>
          {questionsData.map((questionData, questionIndex) => (
            <AnswerPicker
              key={questionData.id}
              question={questionData.question}
              answers={questionData.choices}
              questionIndex={questionIndex}
              onAnswerPick={onAnswerPick}
              translateX={`calc(${currentQuestion} *(-100% - var(--gap-between-cards)))`}
            />
          ))}
        </CardsContainer>
      </CardsScroller>
      <NavContainer>
        <StButton
          $variant="secondary"
          disabled={isFirstQuestion() || disableNav}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </StButton>
        <StButton
          $variant="secondary"
          disabled={isLastQuestion() || disableNav}
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
  disableNav: PropTypes.bool
};

export default QuizNavigator;
