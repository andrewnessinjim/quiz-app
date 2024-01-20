import PropTypes from "prop-types";
import styled from "styled-components";
import StButton from "../StButton/StButton";

const Wrapper = styled.div`
    height: 40px
`;

const ScaleUpButton = styled(StButton)`
    @keyframes scale-up {
        from {
        transform: scale(0);
        }
        to {
        transform: scale(1);
        }
    }

    animation-name: scale-up;
    animation-duration: 300ms;
`;

function ActionBar({ showSubmitButton, showResetButton, onSubmit, onReset }) {
    return (
        <Wrapper>
            {showSubmitButton && 
                <ScaleUpButton onClick={onSubmit}>Submit</ScaleUpButton>}
            {showResetButton &&
                <ScaleUpButton onClick={onReset}>Retry</ScaleUpButton>}
        </Wrapper>
    )
}

ActionBar.propTypes = {
    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    showSubmitButton: PropTypes.bool,
    showResetButton: PropTypes.bool
}

export default ActionBar;