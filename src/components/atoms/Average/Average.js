import styled from 'styled-components';

export const Average = styled.div`
  width: 65px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value > 0) return theme.colors.success;
    return theme.colors.grey;
  }};
`;