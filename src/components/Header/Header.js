import styled from "styled-components";
import SiteWidthWrapper from "../SiteWidthWrapper";

import ThemeToggle from "../ThemeToggle";

const Wrapper = styled.header`
  ${SiteWidthWrapper}
  padding-top: clamp(0.75rem, 1.8vw + 0.3rem, 1rem);
  padding-bottom: clamp(0.75rem, 1.8vw + 0.3rem, 1rem);

  display: flex;
  flex-direction: row-reverse;
`;

function Header() {
  return (
    <Wrapper>
      <ThemeToggle />
    </Wrapper>
  );
}

export default Header;
