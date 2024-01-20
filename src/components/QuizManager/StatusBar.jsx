/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import styled from "styled-components";
import DiscreteProgress from "../DiscreteProgress";

const Wrapper = styled.div`
    max-width: 32rem;
    width: 100%;
    height: 44px;
`;

const ProgressContainer = styled.div`
    width: 100%;
    max-width: 32rem;
`

function StatusBar({showProgress, total ,completed ,showScore, score}) {
    
    return (
        <Wrapper>
            {showProgress &&
                <ProgressContainer>
                    <DiscreteProgress total={total} completed={completed} />
                </ProgressContainer>}
                 
            {showScore && 
                <p>You scored {score}/{total}</p>}
        </Wrapper>
    )
}

StatusBar.propTypes ={
    showProgress: PropTypes.bool,
    total: PropTypes.number,
    completed: PropTypes.number,
    showScore: PropTypes.bool,
    score: PropTypes.number,
}

export default StatusBar;