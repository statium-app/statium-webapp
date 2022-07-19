import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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
  display: flex;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSVG = styled.svg`
  height: 1.75rem;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;

  &:hover {
    fill: currentColor;
  }
`;

const Header = (): JSX.Element => {
  return (
    <CustomHeader>
      <CustomNav>
        <div>
          <Link href="/">
            <HeaderLink>Statium</HeaderLink>
          </Link>
        </div>
        <Row>
          <HeaderLink href="https://twitter.com/statiumapp">
            <StyledSVG
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </StyledSVG>
          </HeaderLink>
          <HeaderLink href="/newsletter">Newsletter</HeaderLink>
          <HeaderLink href="/blog">Blog</HeaderLink>
        </Row>
      </CustomNav>
    </CustomHeader>
  );
};

export default Header;
