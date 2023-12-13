import PropTypes from "prop-types";
import styled from "styled-components";
import * as _ from "lodash";
import * as Progress from "@radix-ui/react-progress";

const StProgressRoot = styled(Progress.Root)`
  margin-top: 16px;
  width: 100%;
  max-width: 32rem;
`;

const StProgressIndicator = styled(Progress.Indicator)`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const StProgressSegment = styled.div`
  --fill-color: ${(p) => p.theme.colors.plum11};
  --empty-color: white;
  --border-radius: 6px;
  --border: 2px solid ${(p) => p.theme.colors.plum11};

  flex: 1;
  height: 12px;
  border-radius: var(--border-radius);
  border: var(--border);
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

function QuizProgress({ total, completed }) {
  console.log({ completed });
  return (
    <StProgressRoot value={completed} max={total}>
      <StProgressIndicator>
        {_.range(total).map((num) => (
          <StProgressSegment $isCompleted={num < completed} key={num} />
        ))}
      </StProgressIndicator>
    </StProgressRoot>
  );
}

QuizProgress.propTypes = {
  total: PropTypes.number,
  completed: PropTypes.number,
};

export default QuizProgress;
