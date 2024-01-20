import styled from "styled-components";
import PropTypes from "prop-types";

import StButton from "../StButton/StButton";

const Wrapper = styled.div`
  margin-top: auto;
  display: flex;
  gap: 8px;
`;

function QuizNavigator({currentQuestion, setCurrentQuestion, totalQuestions}) {
    function isFirstQuestion() {
        return currentQuestion === 0;
      }
    
      function isLastQuestion() {
        return currentQuestion === totalQuestions - 1;
      }

    return (
        <Wrapper>
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
        </Wrapper>
    )
}

QuizNavigator.propTypes = {
    currentQuestion: PropTypes.number.isRequired,
    setCurrentQuestion: PropTypes.func.isRequired,
    totalQuestions: PropTypes.number.isRequired
}

export default QuizNavigator;