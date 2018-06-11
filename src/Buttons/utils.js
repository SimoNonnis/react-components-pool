import { darken } from 'polished';

export function getColor(theme, styleType, type, disabled) {
  if (disabled) return theme.color.white;

  const style = styleType || type;

  switch (style) {
    case 'secondary':
    case 'white':
      return theme.color.mediumBlue;
    case 'danger':
      return theme.color.red;
    case 'highlight':
    case 'outline':
    default:
      return theme.color.white;
  }
}

export function getColorOnHover(theme, styleType, type, disabled) {
  if (disabled) return theme.color.white;

  const style = styleType || type;

  switch (style) {
    case 'outline':
      return theme.color.mediumBlue;
    case 'danger':
    case 'secondary':
    case 'highlight':
    case 'white':
    default:
      return theme.color.white;
  }
}

export function getBorderColor(theme, styleType, type, disabled) {
  if (disabled) return theme.color.lightGrey4;

  const style = styleType || type;

  switch (style) {
    case 'danger':
      return theme.color.red;
    case 'highlight':
      return theme.color.green;
    case 'outline':
    case 'white':
      return theme.color.white;
    case 'secondary':
    default:
      return theme.color.mediumBlue;
  }
}

export function getBorderColorOnHover(theme, styleType, type, disabled) {
  if (disabled) return theme.color.lightGrey4;

  const style = styleType || type;

  switch (style) {
    case 'danger':
      return theme.color.red;
    case 'highlight':
      return darken(0.05, theme.color.green);
    case 'outline':
      return theme.color.white;
    case 'white':
    case 'secondary':
      return theme.color.mediumBlue;
    default:
      return darken(0.05, theme.color.mediumBlue);
  }
}

export function getBackgroundColor(theme, styleType, type, disabled) {
  if (disabled) return theme.color.lightGrey4;

  const style = styleType || type;

  switch (style) {
    case 'secondary':
    case 'outline':
      return 'transparent';
    case 'highlight':
      return theme.color.green;
    case 'danger':
    case 'white':
      return theme.color.white;
    default:
      return theme.color.mediumBlue;
  }
}

export function getBackgroundColorOnHover(theme, styleType, type, disabled) {
  if (disabled) return theme.color.lightGrey4;

  const style = styleType || type;

  switch (style) {
    case 'highlight':
      return darken(0.05, theme.color.green);
    case 'danger':
      return theme.color.red;
    case 'outline':
      return theme.color.white;
    case 'white':
    case 'secondary':
      return theme.color.mediumBlue;
    default:
      return darken(0.05, theme.color.mediumBlue);
  }
}

export function getPadding(size) {
  switch (size) {
    case 'small':
      return '8px 30px';
    case 'large':
      return '16px 55px';
    default:
      return '12px 40px';
  }
}

export function getFontSize(size) {
  switch (size) {
    case 'small':
      return `16px`;
    case 'large':
      return `22px`;
    default:
      return `18px`;
  }
}
