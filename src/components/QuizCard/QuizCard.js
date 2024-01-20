import styled from "styled-components";
import PropTypes from "prop-types";

import AnswerPicker from "../AnswerPicker";

import React from "react";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;



function QuizCard({ questionData, questionIndex, onAnswerPick, disablePicking, style }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return (
    <Wrapper
      style={style}>
        <AnswerPicker
          key={questionData.id}
          question={questionData.question}
          answers={questionData.choices}
          questionIndex={questionIndex}
          onAnswerPick={onAnswerPick}
          disablePicking={disablePicking}
          disableInitialAnimation={!mounted}
        />
    </Wrapper>
  );
}

QuizCard.propTypes = {
  questionData: PropTypes.object,
  questionIndex: PropTypes.number,
  onAnswerPick: PropTypes.func,
  disablePicking: PropTypes.bool,
  style: PropTypes.object
};

export default QuizCard;
