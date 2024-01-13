import React from "react";
import PropTypes from "prop-types";

import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";
import StRadioGroupItem from "./StRadioGroupItem";
import { motion } from "framer-motion";

const StWrapper = styled(motion.section)`
    --left-align-padding: 32px;
    width: var(--question-card-width);
    max-width: var(--question-card-max-width);
    border: 4px solid ${(p) => p.theme.colors.plum7};
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`;

const StQuestion = styled.p`
    margin: 0;
    background: ${(p) => p.theme.colors.plum7};
    color: ${(p) => p.theme.colors.plum12};
    padding: 24px 16px;
    padding-left: var(--left-align-padding);
`;

const StAnswersRadioGroupRoot = styled(RadioGroup.Root)`
    padding: 16px 0;
    background: ${(p) => p.theme.colors.mauve3};
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-x: clip;
`;

function AnswerPicker({ questionIndex, question, answers, onAnswerPick, translateX }) {
    const [pickedAnswerKey, setPickedAnswerKey] = React.useState("")

    return (
        <StWrapper
            animate={{
                x: translateX
            }}>
            <StQuestion>{question}</StQuestion>
            <form>
                <StAnswersRadioGroupRoot
                    value={pickedAnswerKey}
                    onValueChange={(pickedValue) => {
                        setPickedAnswerKey(pickedValue)
                        onAnswerPick(questionIndex, pickedValue);
                    }}
                >
                    {Object.keys(answers).map((answerKey) => {
                        return (
                            <StRadioGroupItem
                                key={answerKey}
                                answerKey={answerKey}
                                checked={pickedAnswerKey === answerKey}
                            >
                                {answers[answerKey]}
                            </StRadioGroupItem>
                        );
                    })}
                </StAnswersRadioGroupRoot>
            </form>
        </StWrapper>
    );
}

AnswerPicker.propTypes = {
    questionIndex: PropTypes.number,
    question: PropTypes.string,
    answers: PropTypes.object,
    onAnswerPick: PropTypes.func,
    translateX: PropTypes.string
};

export default AnswerPicker;
