import PropTypes from "prop-types";

import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "styled-components";

const StWrapper = styled.section`
  --left-align-padding: 32px;
  --hovered-slide-amount: 24px;
  --selected-slide-amount: 16px;
  --total-slide-amount: calc(
    var(--hovered-slide-amount) + var(--selected-slide-amount)
  );
  max-width: 32rem;
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

const StChoicesWrapper = styled(RadioGroup.Root)`
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
  padding-left: calc(var(--left-align-padding) + var(--total-slide-amount));
  transform: translateX(calc(-1 * var(--total-slide-amount)));
  background: ${(p) => p.theme.colors.mauve4};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 250ms transform;
  cursor: pointer;
  color: ${(p) => p.theme.colors.plum12};
  transition:
    150ms background ease-in,
    150ms transform ease-in,
    500ms border-radius ease-in;

  @media (hover: hover) {
    &:hover {
      transform: translateX(
        calc((-1 * var(--total-slide-amount)) + var(--hovered-slide-amount))
      );
      background: ${(p) => p.theme.colors.plum7};
    }
  }

  &[data-state="checked"] {
    transform: translateX(0px);
    background: ${(p) => p.theme.colors.plum7};
    border-top-right-radius: initial;
    border-bottom-right-radius: initial;
  }
`;

const StLabel = styled.label`
  cursor: pointer;
`;

function QuestionCard({ question, choices }) {
  return (
    <StWrapper>
      <StQuestion>{question}</StQuestion>
      <form>
        <StChoicesWrapper>
          {Object.keys(choices).map((choiceKey) => {
            console.log({ choiceKey });
            return (
              <StRadioGroupItem
                id={choiceKey}
                value={choiceKey}
                key={choiceKey}
              >
                <StLabel htmlFor={choiceKey}>{choices[choiceKey]}</StLabel>
              </StRadioGroupItem>
            );
          })}
        </StChoicesWrapper>
      </form>
    </StWrapper>
  );
}

QuestionCard.propTypes = {
  question: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.object),
};

export default QuestionCard;
