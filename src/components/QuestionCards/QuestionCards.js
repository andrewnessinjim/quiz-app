import styled from "styled-components";
import PropTypes from "prop-types";

import QuestionCard from "../QuestionCard/QuestionCard";

import React from "react";
import StButton from "../StButton/StButton";

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
  transition: 250ms transform ease-in;
`;

const NavContainer = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 8px;
`;

function QuestionCards({ data, onAnswerSelect, quizSubmitted }) {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const translateXIfMaxWidth = `calc(${
    currentQuestion * -1
  } * var(--question-card-width))`;
  const translateXIfLessThanMaxWidth = `calc(${
    currentQuestion * -1
  } * var(--question-card-max-width))`;
  const translateXAmount = `max(${translateXIfMaxWidth},${translateXIfLessThanMaxWidth})`;

  return (
    <Wrapper>
      <CardsScroller>
        <CardsContainer style={{ "--translateXAmount": translateXAmount }}>
          {data.map((questionData, questionIndex) => (
            <QuestionCard
              key={questionData.id}
              question={questionData.question}
              choices={questionData.choices}
              onAnswerSelect={(selectedAnswer) =>
                onAnswerSelect(questionIndex, selectedAnswer)
              }
            />
          ))}
        </CardsContainer>
      </CardsScroller>
      <NavContainer>
        <StButton
          $style="secondary"
          disabled={currentQuestion === 0 || quizSubmitted}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </StButton>
        <StButton
          $style="secondary"
          disabled={currentQuestion === data.length - 1 || quizSubmitted}
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </StButton>
      </NavContainer>
    </Wrapper>
  );
}

QuestionCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onAnswerSelect: PropTypes.func,
  quizSubmitted: PropTypes.bool
};

export default QuestionCards;
