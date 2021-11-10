import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledAverage = styled.div`

  width: 35px;
  height: 35px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; left: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  background: ${({ theme, value }) => {
    if (value < 99) return theme.colors.green;
    if (value > 130) return theme.colors.my_color;

    return theme.colors.grey;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;