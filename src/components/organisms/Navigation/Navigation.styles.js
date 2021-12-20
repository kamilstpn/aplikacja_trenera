import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  justify-content: flex-start;
  padding: 0px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
  
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 25px;
    color: ${({ theme }) => theme.colors.colorek};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0.3;
    transition: opacity 0.8s ease-in-out;
    content: '';
    position: absolute;
    width: 150px;
    height: 3px;
    top: 100%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.colorek};
  }
`;