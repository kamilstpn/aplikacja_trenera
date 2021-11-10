import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Aplikacja
          <br />
          Trenera
        </h1>
      </Logo>
      <StyledLink to="/group">Strona główna</StyledLink>
    </Wrapper>
  );
};

export default Navigation;