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
  transform: translateX(var(--translateXAmount));
  transition: 500ms transform cubic-bezier(.6,.32,0,.86);
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

  const translateXWhenCardIsLessThanMaxWidth = `calc(${
    currentQuestion * -1
  }  * (var(--question-card-width) + var(--gap-between-cards)))`;
  const translateXWhenCardIsMaxWidth = `calc(${
    currentQuestion * -1
  }  * (var(--question-card-max-width) + var(--gap-between-cards)))`;

  // Actual translate amount should be the minimum of these two,
  // but since we need negative translate values, max does the job instead.
  const translateXAmount = `max(${translateXWhenCardIsLessThanMaxWidth},${translateXWhenCardIsMaxWidth})`;

  return (
    <Wrapper>
      <CardsScroller>
        <CardsContainer style={{ "--translateXAmount": translateXAmount }}>
          {questionsData.map((questionData, questionIndex) => (
            <AnswerPicker
              key={questionData.id}
              question={questionData.question}
              answers={questionData.choices}
              questionIndex={questionIndex}
              onAnswerPick={onAnswerPick}
            />
          ))}
        </CardsContainer>
      </CardsScroller>
      <NavContainer>
        <StButton
          $style="secondary"
          disabled={currentQuestion === 0 || disableNav}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </StButton>
        <StButton
          $style="secondary"
          disabled={currentQuestion === questionsData.length - 1 || disableNav}
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
