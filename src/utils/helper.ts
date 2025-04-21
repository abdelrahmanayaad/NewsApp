import {Dimensions, PixelRatio} from 'react-native';

// Get device dimensions
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// Based on iPhone 11 Pro Max as baseline device
const BASE_WIDTH = 414;
const BASE_HEIGHT = 896;

// Type for style input
type ResponsiveStyleInput = {
  width?: number;
  height?: number;
  fontSize?: number;
  padding?: number;
  margin?: number;
  [key: string]: any;
};

// Type for responsive style output
type ResponsiveStyleOutput = {
  width?: number;
  height?: number;
  fontSize?: number;
  padding?: number;
  margin?: number;
  [key: string]: any;
};

export const responsiveWidth = (widthPercent: number): number => {
  return PixelRatio.roundToNearestPixel(
    (SCREEN_WIDTH * widthPercent) / BASE_WIDTH,
  );
};

export const responsiveHeight = (heightPercent: number): number => {
  return PixelRatio.roundToNearestPixel(
    (SCREEN_HEIGHT * heightPercent) / BASE_HEIGHT,
  );
};

export const responsiveFontSize = (fontSize: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = fontSize * scale;
  return PixelRatio.roundToNearestPixel(newSize);
};

export const responsiveSize = (size: number): number => {
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * size) / BASE_WIDTH);
};

export const responsiveHeightSize = (size: number): number => {
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * size) / BASE_HEIGHT);
};

export const createResponsiveStyle = <T extends ResponsiveStyleInput>(
  styles: T,
): ResponsiveStyleOutput => {
  const responsiveStyles: ResponsiveStyleOutput = {};
  for (const [key, value] of Object.entries(styles)) {
    switch (key) {
      case 'width':
        responsiveStyles[key] = responsiveWidth(value);
        break;
      case 'height':
        responsiveStyles[key] = responsiveHeight(value);
        break;
      case 'fontSize':
        responsiveStyles[key] = responsiveFontSize(value);
        break;
      case 'padding':
      case 'margin':
      case 'marginTop':
      case 'margin':
      case 'bottom':
      case 'top':
      case 'right':
      case 'left':
      case 'borderRadius':
        responsiveStyles[key] = responsiveSize(value);
        break;
      default:
        responsiveStyles[key] = value;
    }
  }
  return responsiveStyles;
};
