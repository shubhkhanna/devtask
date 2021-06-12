import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  white: '#fff',
  smokeWhite: '#eff2f6',
  grey: '#d1dadd',
  black: '#000000',
  dimGray: '#56767b',
};

export const SIZES = {
  // app dimensions
  width,
  height,

  // global sizes
  base: 8,
  radius: 12,
  font: 14,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  body6: 10,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Roboto-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Roboto-Black', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h5, lineHeight: 22},
  h6: {fontFamily: 'Roboto-Bold', fontSize: SIZES.h6, lineHeight: 22},
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
  body6: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body6,
    lineHeight: 22,
  },
};

export default {COLORS, SIZES, FONTS};
