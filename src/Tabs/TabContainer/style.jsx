import styled from 'styled-components';
import { Flex } from 'grid-styled';

export const Tabs = styled(Flex)`
  font-size: 14px;
  border-bottom: 2px solid ${({ theme }) => theme.color.mediumBlue};
`;
export const Tab = styled.button`
  cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
  background-color: ${({ theme, isActive }) => (isActive ? theme.color.mediumBlue : '#e6e6e6')};
  color: ${({ theme, isActive }) => (isActive ? theme.color.white : 'inherit')};
  box-shadow: none;
  outline: 0;
  user-select: none;
  appearance: none;
  flex: 1 1 0;
  border: none;
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  padding: 10px 0;
  font-size: inherit;
  margin-left: 3px;

  &:first-child {
    margin-left: 0;
  }

  > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
