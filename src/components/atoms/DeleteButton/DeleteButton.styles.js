import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  height: 20px;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.colors.colorek};
  border-radius: 50px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;