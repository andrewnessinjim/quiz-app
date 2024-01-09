import React from "react";
import PropTypes from "prop-types";

import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

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
  --checked-item-translateX: 0px;
  --unchecked-item-translateX: -32px;
  --hovered-item-translateX: -16px;

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
  position: relative;
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
  position: relative;
  display: block;
  width: calc(100% - var(--left-align-padding) + var(--unchecked-item-translateX));
  `;

const StRadioItemBackground = styled.span`
  position: absolute;
  background: ${(p) => p.theme.colors.mauve4};
  inset: 0;

  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;

  transform: translateX(var(--unchecked-item-translateX));

  transition: 150ms background ease-in, 150ms transform ease-in, 500ms border-radius ease-in;

  ${StRadioGroupItem}:hover & {
    background: ${(p) => p.theme.colors.plum7};
    transform: translateX(var(--hovered-item-translateX));
  }

  ${StRadioGroupItem}[data-state="checked"] & {
    background: ${(p) => p.theme.colors.plum7};
    transform: translateX(var(--checked-item-translateX));

    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
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
              <StRadioGroupItem
                key={answerKey}
                id={`${choiceRadioPrefixId}-${answerKey}`}
                value={answerKey}
              >
                <StRadioItemBackground />
                <StLabel htmlFor={`${choiceRadioPrefixId}-${answerKey}`}>
                  {answers[answerKey]}
                </StLabel>
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
};

export default AnswerPicker;
