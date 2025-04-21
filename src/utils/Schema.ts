import {TextStyle} from 'react-native';
import {responsiveFontSize} from './helper';

const darkTheme = {
  colors: {
    white: '#FFFFFF',
    white2: '#F6F6F6',
    black: '#000',
    disabledColor: '#EFEFEF',
    gray: '#A3A3A3',
    red: '#FF0000',
  },
  fontSizes: {
    fs46: responsiveFontSize(46),
    fs40: responsiveFontSize(40),
    fs36: responsiveFontSize(36),
    fs24: responsiveFontSize(24),
    fs20: responsiveFontSize(20),
    fs18: responsiveFontSize(18),
    fs16: responsiveFontSize(16),
    fs15: responsiveFontSize(15),
    fs14: responsiveFontSize(14),
    fs13: responsiveFontSize(13),
    fs12: responsiveFontSize(12),
    fs11: responsiveFontSize(11),
    fs10: responsiveFontSize(10),
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
};
const lightTheme = {
  colors: {
    white: '#FFFFFF',
    white2: '#F6F6F6',
    black: '#000',
    disabledColor: '#EFEFEF',
    gray: '#A3A3A3',
    red: '#FF0000',
  },
  fontSizes: {
    fs46: responsiveFontSize(46),
    fs40: responsiveFontSize(40),
    fs36: responsiveFontSize(36),
    fs24: responsiveFontSize(24),
    fs20: responsiveFontSize(20),
    fs18: responsiveFontSize(18),
    fs16: responsiveFontSize(16),
    fs15: responsiveFontSize(15),
    fs14: responsiveFontSize(14),
    fs13: responsiveFontSize(13),
    fs12: responsiveFontSize(12),
    fs11: responsiveFontSize(11),
    fs10: responsiveFontSize(10),
  },
  fontWeights: {
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
  },
};

const THEME = true ? lightTheme : darkTheme;

export const colors = THEME.colors;
export const fontSizes = THEME.fontSizes;
export const fontWeights = THEME.fontWeights as {
  [keyof in
    | 'light'
    | 'regular'
    | 'medium'
    | 'semiBold'
    | 'bold'
    | 'extraBold']: TextStyle['fontWeight'];
};
