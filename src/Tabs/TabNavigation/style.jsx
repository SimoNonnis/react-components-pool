import styled from 'styled-components';
import Button from '../../Buttons/Button';

export const NavigationGroup = styled.div`
  background-color: #fff;
  padding: 1.5em;
  text-align: right;
`;

export const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  padding: 0 5px;
`;

export const Icon = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

export const NavigationButton = styled(Button)`
  margin-left: 10px;
`;
