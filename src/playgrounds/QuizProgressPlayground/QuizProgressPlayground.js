import React from "react";
import styled from "styled-components";
import QuizProgress from "../../components/QuizProgress";

const Wrapper = styled.div``;

const NumInputWrapper = styled.div``;

function QuizProgressPlayground() {
  const totalQuestionsId = React.useId("total-questions");
  const [totalQuestions, setTotalQuestionsValue] = React.useState(10);

  const completedQuestionsId = React.useId("completed-questions");
  const [completedQuestions, setCompletedQuestionsValue] = React.useState(2);

  return (
    <Wrapper>
      <NumInputWrapper>
        <input
          type="number"
          id={totalQuestionsId}
          value={totalQuestions}
          onChange={(e) => setTotalQuestionsValue(e.target.value)}
        />
      </NumInputWrapper>
      <NumInputWrapper>
        <input
          type="number"
          id={completedQuestionsId}
          value={completedQuestions}
          onChange={(e) => setCompletedQuestionsValue(e.target.value)}
        />
      </NumInputWrapper>
      <QuizProgress total={totalQuestions} completed={completedQuestions} />
    </Wrapper>
  );
}

export default QuizProgressPlayground;
