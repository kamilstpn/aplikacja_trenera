import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 62px;
  height: 22px;
  margin: 0 30px;
  background-color: ${({ theme }) => theme.colors.my_color};
  border-radius: 50px;
  border: solid;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 150%;
    height: 120%;
  }
`;