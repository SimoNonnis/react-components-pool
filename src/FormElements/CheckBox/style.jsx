import styled from 'styled-components';

export const Container = styled.span`
  display: inline-block;
  position: relative;

  & + & {
    margin-left: 1em;
  }
`;
Container.displayName = 'Container';

export const Check = styled.input`
  opacity: 0;
  position: absolute;
  right: 0;

  &:checked + label:after {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;
Check.displayName = 'Check';

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.color.veryDarkBlue};
  ${({ theme, error }) => error && `color: ${theme.color.red}`};
  ${({ theme, disabled }) => disabled && `color: ${theme.color.lightGrey1}`};
  line-height: 24px;
  position: relative;
  user-select: none;
  padding-left: 30px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border: 1px solid;
    border-color: ${({ theme: { color }, disabled }) =>
      disabled ? color.lightGrey1 : color.stoneGrey};
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  ${({ theme, disabled }) =>
    disabled ? `&:hover { &:before { background-color: ${theme.color.lightGrey3}; } }` : null};
  &:after {
    border: solid ${({ theme }) => theme.color.mediumBlue};
    border-width: 0 3px 3px 0;
    content: '';
    font-family: ${({ theme }) => theme.base.fontFamily};
    font-size: 16px;
    height: 10px;
    left: 7px;
    top: 2.5px;
    opacity: 0;
    position: absolute;
    transform: rotate(45deg) scale(0);
    transition: all 0.2s;
    width: 5px;
  }
`;
Label.displayName = 'Label';

export const ExampleLabel = styled.div`
  color: ${({ theme }) => theme.color.green};
`;
