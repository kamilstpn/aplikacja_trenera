import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  border: solid;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.colorek};
`;