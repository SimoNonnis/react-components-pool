import styled from 'styled-components';

export const Container = styled.div`
  align-items: stretch;
  background-color: ${({ theme }) => theme.color.lightGrey3};
  border-radius: 20px;
  display: flex;
  min-height: 15px;
`;
Container.displayName = 'Container';

export const Bar = styled.span`
  align-items: center;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 20px;
  color: ${({ theme }) => theme.color.white};
  display: flex;
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: ${({ theme }) => theme.base.fontSize};
  justify-content: center;
  min-height: 15px;
  transition: all 0.25s ease-in;
`;
Bar.displayName = 'Bar';
