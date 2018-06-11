/* eslint-env jest */
import theme from 'themes';
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

describe('Test getColor()', () => {
  it('should render "theme.color.white"', () => {
    expect(getColor(theme, '')).toEqual('#ffffff');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getColor(theme, 'secondary')).toEqual('#0099cf');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getColor(theme, 'white')).toEqual('#0099cf');
  });
  it('should render "theme.color.white"', () => {
    expect(getColor(theme, 'highlight')).toEqual('#ffffff');
  });
  it('should render "theme.color.white"', () => {
    expect(getColor(theme, 'outline')).toEqual('#ffffff');
  });
  it('should render "theme.color.white"', () => {
    expect(getColor(theme, '', true)).toEqual('#ffffff');
  });
});

describe('Test getColorOnHover()', () => {
  it('should render "theme.color.white"', () => {
    expect(getColorOnHover(theme, '')).toEqual('#ffffff');
  });
  it('should render "theme.color.white"', () => {
    expect(getColorOnHover(theme, 'secondary')).toEqual('#ffffff');
  });
  it('should render "theme.color.white"', () => {
    expect(getColorOnHover(theme, 'white')).toEqual('#ffffff');
  });
  it('should render "theme.color.white"', () => {
    expect(getColorOnHover(theme, 'highlight')).toEqual('#ffffff');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getColorOnHover(theme, 'outline')).toEqual('#0099cf');
  });
  it('should render "theme.color.white"', () => {
    expect(getColorOnHover(theme, '', true)).toEqual('#ffffff');
  });
});

describe('Test getBorderColor()', () => {
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBorderColor(theme, '')).toEqual('#0099cf');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBorderColor(theme, 'secondary')).toEqual('#0099cf');
  });
  it('should render "theme.color.white"', () => {
    expect(getBorderColor(theme, 'white')).toEqual('#ffffff');
  });
  it('should render "theme.color.green"', () => {
    expect(getBorderColor(theme, 'highlight')).toEqual('#35A856');
  });
  it('should render "theme.color.white"', () => {
    expect(getBorderColor(theme, 'outline')).toEqual('#ffffff');
  });
  it('should render "theme.color.lightGrey4"', () => {
    expect(getBorderColor(theme, '', '', true)).toEqual('#c8cccf');
  });
});

describe('Test getBorderColorOnHover()', () => {
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBorderColorOnHover(theme, '')).toEqual('#0086b6');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBorderColorOnHover(theme, 'secondary')).toEqual('#0099cf');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBorderColorOnHover(theme, 'white')).toEqual('#0099cf');
  });
  it('should render "theme.color.green"', () => {
    expect(getBorderColorOnHover(theme, 'highlight')).toEqual('#2f954c');
  });
  it('should render "theme.color.white"', () => {
    expect(getBorderColorOnHover(theme, 'outline')).toEqual('#ffffff');
  });
  it('should render "theme.color.lightGrey4"', () => {
    expect(getBorderColorOnHover(theme, '', '', true)).toEqual('#c8cccf');
  });
});

describe('Test getBackgroundColor()', () => {
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBackgroundColor(theme, '')).toEqual('#0099cf');
  });
  it('should render "transparent"', () => {
    expect(getBackgroundColor(theme, 'secondary')).toEqual('transparent');
  });
  it('should render "theme.color.white"', () => {
    expect(getBackgroundColor(theme, 'white')).toEqual('#ffffff');
  });
  it('should render "theme.color.green"', () => {
    expect(getBackgroundColor(theme, 'highlight')).toEqual('#35A856');
  });
  it('should render "transparent"', () => {
    expect(getBackgroundColor(theme, 'outline')).toEqual('transparent');
  });
  it('should render "theme.color.lightGrey4"', () => {
    expect(getBackgroundColor(theme, '', '', true)).toEqual('#c8cccf');
  });
});

describe('Test getBackgroundColorOnHover()', () => {
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBackgroundColorOnHover(theme, '')).toEqual('#0086b6');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBackgroundColorOnHover(theme, 'secondary')).toEqual('#0099cf');
  });
  it('should render "theme.color.mediumBlue"', () => {
    expect(getBackgroundColorOnHover(theme, 'white')).toEqual('#0099cf');
  });
  it('should render "theme.color.green"', () => {
    expect(getBackgroundColorOnHover(theme, 'highlight')).toEqual('#2f954c');
  });
  it('should render "theme.color.green"', () => {
    expect(getBackgroundColorOnHover(theme, 'highlight', 'button')).toEqual('#2f954c');
  });
  it('should render "theme.color.white"', () => {
    expect(getBackgroundColorOnHover(theme, 'outline')).toEqual('#ffffff');
  });
  it('should render "theme.color.lightGrey4"', () => {
    expect(getBackgroundColorOnHover(theme, '', '', true)).toEqual('#c8cccf');
  });
});

describe('Test getPadding()', () => {
  it('should render padding for "small" size', () => {
    expect(getPadding('small')).toEqual('8px 30px');
  });
  it('should render padding for "large" size', () => {
    expect(getPadding('large')).toEqual('16px 55px');
  });
  it('should render default padding', () => {
    expect(getPadding('')).toEqual('12px 40px');
  });
});

describe('Test getFontSize()', () => {
  it('should render font size for "small"', () => {
    expect(getFontSize('small')).toEqual('16px');
  });
  it('should render font size for "large"', () => {
    expect(getFontSize('large')).toEqual('22px');
  });
  it('should render default font size', () => {
    expect(getFontSize('')).toEqual('18px');
  });
});
