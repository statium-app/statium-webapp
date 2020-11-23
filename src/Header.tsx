import React from 'react';
import styled from 'styled-components';

const CustomHeader = styled.header`
  border-bottom: solid 1px #ccc;
`

const CustomNav = styled.nav`
  display: flex;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: min(100ch, 100%);
`;

const HeaderLink = styled.a`
  padding: .5rem;
  line-height: 1.75rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const Header = () => {
  return (
    <CustomHeader>
      <CustomNav>
        <HeaderLink href="/">Statium</HeaderLink>
      </CustomNav>
    </CustomHeader>
  );
};

export default Header;
