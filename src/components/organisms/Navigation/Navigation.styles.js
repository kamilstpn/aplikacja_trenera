import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  b
  justify-content: flex-start;
  padding: 85px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.green};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.green};
  text-align: right;
  margin: 0px 20px 15px auto;
  position: relative;
  &.${activeClassName} {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 135px;
    height: 3px;
    top: 100%;
    transform: translateY(-50%);
    right: -10px;
    background-color: ${({ theme }) => theme.colors.green};
  }
`;