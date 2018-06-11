import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import {
  getColor,
  getColorOnHover,
  getBorderColor,
  getBorderColorOnHover,
  getBackgroundColor,
  getBackgroundColorOnHover,
  getPadding,
  getFontSize,
} from './utils';

const buttonStyle = css`
  -webkit-font-smoothing: antialiased;
  background-color: ${({ theme, styleType, type, disabled }) =>
    getBackgroundColor(theme, styleType, type, disabled)};
  border: 1px solid
    ${({ theme, styleType, type, disabled }) => getBorderColor(theme, styleType, type, disabled)};
  border-width: 1px;
  border-radius: ${({ rounded }) => `${rounded}px`};
  box-sizing: border-box;
  color: ${({ theme, styleType, type, disabled }) => getColor(theme, styleType, type, disabled)};
  cursor: ${({ disabled }) => (disabled ? 'no-drop' : 'pointer')};
  display: inline-block;
  font-family: ${({ theme }) => theme.base.fontFamily};
  font-size: ${({ size }) => getFontSize(size)};
  font-weight: 600;
  line-height: 24px;
  outline: 0;
  padding: ${({ size }) => getPadding(size)};
  text-align: center;
  text-shadow: none;
  white-space: nowrap;
  text-decoration: none;
  min-width: ${({ fullWidth, size }) => {
    if (fullWidth) return '100%';
    return size === 'small' ? '100px' : '140px';
  }};

  &:hover,
  &:focus {
    background-color: ${({ theme, styleType, type, disabled }) =>
      getBackgroundColorOnHover(theme, styleType, type, disabled)};
    border-color: ${({ theme, styleType, type, disabled }) =>
      getBorderColorOnHover(theme, styleType, type, disabled)};
    color: ${({ theme, styleType, type, disabled }) =>
      getColorOnHover(theme, styleType, type, disabled)};
    outline: 0;
  }
`;

const linkStyle = css`
  background-color: transparent;
  border: none;
  box-shadow: none;
  color: ${({ theme }) => theme.color.mediumBlue};
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
  outline: 0;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${({ theme }) => theme.color.mediumBlue};
    text-decoration: none;
  }
`;

// eslint-disable-next-line
export const BtnLink = styled(({ external, fullWidth, to, theme, rounded, styleType, type, size, ...restProps}) => (external ? <a href={to} {...restProps} /> : <Link to={to} {...restProps} />))`
  ${buttonStyle};
`;
BtnLink.displayName = 'BtnLink';

export const Btn = styled.button`
  ${({ styleType, type }) => (styleType !== 'link' && type !== 'link' ? buttonStyle : linkStyle)};
`;
Btn.displayName = 'Btn';
