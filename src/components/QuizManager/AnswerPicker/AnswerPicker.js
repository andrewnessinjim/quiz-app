import React from "react";
import PropTypes from "prop-types";

import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { motion } from "framer-motion";

const StWrapper = styled.section`
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

const StRadioGroupItem = styled(RadioGroup.Item)`
  background: none;
  border: none;
  text-align: start;
  padding: 0;
  display: block;
  margin: 0;
  
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: var(--left-align-padding);
  width: 100%;
  
  cursor: pointer;
  color: ${(p) => p.theme.colors.plum12};
  `;

const StLabel = styled.label`
  cursor: pointer;
  `;

const AnimatedRadioItemContainer = styled(motion.div)`
  background: ${(p) => p.theme.colors.mauve4};
  transition: 150ms background ease-in;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-right: 32px;

  @media (hover: hover) {
    &:hover {
      background: ${(p) => p.theme.colors.plum7};
    }
  }

  &:has(${StRadioGroupItem}[data-state="checked"]) {
    background: ${(p) => p.theme.colors.plum7};
  }
`;

function AnswerPicker({ questionIndex, question, answers, onAnswerPick }) {
  const [pickedAnswer, setPickedAnswer] = React.useState("")
  const choiceRadioPrefixId = React.useId();

  return (
    <StWrapper>
      <StQuestion>{question}</StQuestion>
      <form>
        <StAnswersRadioGroupRoot
          value={pickedAnswer}
          onValueChange={(pickedValue) => {
            setPickedAnswer(pickedValue)
            onAnswerPick(questionIndex, pickedValue);
          }}
        >
          {Object.keys(answers).map((answerKey) => {
            return (
              <AnimatedRadioItemContainer
                layout={true}
                key={answerKey}
                whileHover={{
                  marginRight: answerKey === pickedAnswer ? "0px" : "16px",
                  paddingRight: answerKey === pickedAnswer ? "32px" : "16px"
                }}

                style={{
                  marginRight: answerKey === pickedAnswer ? "0px" :"32px",
                  paddingRight: answerKey === pickedAnswer ? "32px" :"0px",
                }}

                animate={{
                  borderTopRightRadius: answerKey === pickedAnswer ? "0px" :"16px",
                  borderBottomRightRadius: answerKey === pickedAnswer ? "0px" :"16px"
                }}
              >
                <motion.div layout="position">
                  <StRadioGroupItem
                    id={`${choiceRadioPrefixId}-${answerKey}`}
                    value={answerKey}
                  >
                    <StLabel htmlFor={`${choiceRadioPrefixId}-${answerKey}`}>
                      {answers[answerKey]}
                    </StLabel>
                  </StRadioGroupItem>
                </motion.div>
              </AnimatedRadioItemContainer>
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
};

export default AnswerPicker;
