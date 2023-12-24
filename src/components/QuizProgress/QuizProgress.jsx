import PropTypes from "prop-types";
import styled from "styled-components";
import * as _ from "lodash";
import * as Progress from "@radix-ui/react-progress";
import React from "react";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StProgressRoot = styled(Progress.Root)`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StProgressIndicator = styled(Progress.Indicator)`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const StProgressSegment = styled.div`
  flex: 1;
  height: 12px;
  border-radius: 6px;
  border: 2px solid ${(p) => p.theme.colors.plum11};
  position: relative;
  overflow: clip;

  &::before {
    position: absolute;
    display: block;
    content: " ";
    inset: 0;
    background: ${(p) => p.theme.colors.plum11};
    transform: ${(p) =>
      p.$isCompleted ? "translateX(0)" : "translateX(-100%)"};
    transition: 150ms transform ease-in;
  }
`;

const StLabel = styled.label``;

function QuizProgress({ total, completed }) {
  const progressBarId = React.useId("quiz-progress-bar");
  return (
    <Wrapper>
      <StProgressRoot value={completed} max={total} id={progressBarId}>
        <StLabel htmlFor={progressBarId}>
          {completed} / {total} Completed
        </StLabel>
        <StProgressIndicator>
          {_.range(total).map((num) => (
            <StProgressSegment $isCompleted={num < completed} key={num} />
          ))}
        </StProgressIndicator>
      </StProgressRoot>
    </Wrapper>
  );
}

QuizProgress.propTypes = {
  total: PropTypes.number,
  completed: PropTypes.number,
};

export default QuizProgress;
