import styled from "styled-components";
import PropTypes from "prop-types";

import QuestionCard from "../QuestionCard/QuestionCard";

import React from "react";
import SiteWidthWrapper from "../SiteWidthWrapper";

const Wrapper = styled.section`
  ${SiteWidthWrapper};
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

const StNavButton = styled.button`
  padding: 4px 16px;
  width: 124px;
  color: ${({ theme }) => theme.colors.mauve12};
  border-radius: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.plum7};
  cursor: pointer;

  &[disabled] {
    opacity: 0.75;
  }

  &[disabled]:hover {
    cursor: not-allowed;
  }
`;

function QuestionCards({ data, onAnswerSelect }) {
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
        <StNavButton
          disabled={currentQuestion === 0}
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
        >
          Previous
        </StNavButton>
        <StNavButton
          disabled={currentQuestion === data.length - 1}
          onClick={() => setCurrentQuestion(currentQuestion + 1)}
        >
          Next
        </StNavButton>
      </NavContainer>
    </Wrapper>
  );
}

QuestionCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onAnswerSelect: PropTypes.func,
};

export default QuestionCards;