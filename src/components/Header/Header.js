import styled from "styled-components";
import SiteWidthWrapper from "../SiteWidthWrapper";

import ThemeToggle from "../ThemeToggle";

const Wrapper = styled.header`
  ${SiteWidthWrapper}
  padding-top: 16px;
  padding-bottom: 16px;

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
