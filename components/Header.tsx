import React from "react";
import styled from "styled-components";

const CustomHeader = styled.header`
  border-bottom: solid 1px var(--color-border-muted);
`;

const CustomNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: min(1000px, 100%);
`;

const HeaderLink = styled.a`
  padding: 0.5rem;
  line-height: 1.75rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const Header = (): JSX.Element => {
  return (
    <CustomHeader>
      <CustomNav>
        <div>
          <HeaderLink href="/">Statium</HeaderLink>
        </div>
        <div>
          <HeaderLink href="/newsletter">Newsletter</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
        </div>
      </CustomNav>
    </CustomHeader>
  );
};

export default Header;
