import * as RadioGroup from "@radix-ui/react-radio-group";
import { styled } from "styled-components";

const StWrapper = styled.section`
  --left-align-padding: 32px;
  --slide-amount: 24px;
  max-width: 32rem;
  border: 2px solid ${(p) => p.theme.colors.plum7};
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
  padding: 16px;
  padding-left: 0;
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
  padding-left: calc(var(--left-align-padding) + var(--slide-amount) );
  transform: translateX(calc(-1 * var(--slide-amount)));
  background: ${(p) => p.theme.colors.mauve4};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  transition: 250ms transform;
  cursor: pointer;
  color: ${(p) => p.theme.colors.plum12};
  transition:
    150ms background ease-in,
    150ms transform ease-in;

  &:hover, &[data-state="checked"] {
    transform: translateX(0px);
    background: ${(p) => p.theme.colors.plum7};
  }

  &[data-state="checked"] {
    transform: scale(1.1);
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
              <StRadioGroupItem id={choiceKey} value={choiceKey}>
                <StLabel htmlFor={choiceKey}>{choices[choiceKey]}</StLabel>
              </StRadioGroupItem>
            )
          })}
        </StChoicesWrapper>
      </form>
    </StWrapper >
  );
}

export default QuestionCard;
