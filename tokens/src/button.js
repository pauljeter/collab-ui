import { getColor } from './colors';
import font from './font';
import lineHeight from './lineHeight';
import radius from './radius';

const buttonTokens = {
  pill: {},
  circle: {},
};

const sizes = {
  small: {
    height: 28,
    spacing: {
      paddingTop: 6,
      paddingRight: 14,
      paddingBottom: 7,
      paddingLeft: 6,
      paddingInner: 8,
    },
    font: {
      size: font.fontSize.small,
      weight: font.fontWeight.regular,
    },
    lineHeight: {
      lineHeight: lineHeight.reset,
    },
    radius: {
      borderRadius: radius.pill,
    },
  },
  medium: {},
  large: {},
  xLarge: {},
  xxLarge: {},
  xxxLarge: {},
};

const variants = {
  blue: {
    color: {
      fontColor: getColor('white'),
      iconColor: getColor('white'),
      borderColor: `transparent`,
      backgroundColor: {
        normal: getColor('blue', 50),
        hover: getColor('blue', 60),
        press: getColor('blue', 70),
      },
    },
  },
  red: {
    color: {
      fontColor: getColor('white'),
      iconColor: getColor('white'),
      borderColor: `transparent`,
      backgroundColor: {
        normal: getColor('red', 50),
        hover: getColor('red', 60),
        press: getColor('red', 70),
      },
    },
  },
  green: {
    color: {
      fontColor: getColor('white'),
      iconColor: getColor('white'),
      borderColor: `transparent`,
      backgroundColor: {
        normal: getColor('green', 50),
        hover: getColor('green', 60),
        press: getColor('green', 70),
      },
    },
  },
  yellow: {
    color: {
      fontColor: getColor('white'),
      iconColor: getColor('white'),
      borderColor: `transparent`,
      backgroundColor: {
        normal: getColor('yellow', 50),
        hover: getColor('yellow', 60),
        press: getColor('yellow', 70),
      },
    },
  },
};

const buttonFilled = {};

const buttonGhost = {};

const buttonOutline = {};

const buttonDark = {};

export default buttonTokens;
