import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Aplikacja
          <br />
          Trenera
        </h1>
      </Logo>
      <StyledLink to="/group">Szatnia</StyledLink>
      <StyledLink to="/konspekty">Konspekty treningowe</StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Wyloguj
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;