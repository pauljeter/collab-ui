import border from './border';
import { getColor } from './colors';
import font from './font';
import lineHeight from './lineHeight';
import radius from './radius';

const buttonSizes = {
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

const fontColorLight = getColor('white');
const fontColorDark = getColor('gray', '100');
// Shared interaction background colors
const stateColors = {
  brand: {
    light: {
      normal: getColor('brand', '50'),
      hover: getColor('brand', '60'),
      press: getColor('brand', '70'),
    },
    dark: {
      normal: getColor('brand', '60'),
      hover: getColor('brand', '70'),
      press: getColor('brand', '80'),
    },
  },
  blue: {
    light: {
      normal: getColor('blue', '50'),
      hover: getColor('blue', '60'),
      press: getColor('blue', '70'),
    },
    dark: {
      normal: getColor('blue', '60'),
      hover: getColor('blue', '70'),
      press: getColor('blue', '80'),
    },
  },
  red: {
    light: {
      normal: getColor('red', '50'),
      hover: getColor('red', '60'),
      press: getColor('red', '70'),
    },
    dark: {
      normal: getColor('red', '60'),
      hover: getColor('red', '70'),
      press: getColor('red', '80'),
    },
  },
  green: {
    light: {
      normal: getColor('green', '50'),
      hover: getColor('green', '60'),
      press: getColor('green', '70'),
    },
    dark: {
      normal: getColor('green', '60'),
      hover: getColor('green', '70'),
      press: getColor('green', '80'),
    },
  },
  yellow: {
    light: {
      normal: getColor('yellow', '50'),
      hover: getColor('yellow', '60'),
      press: getColor('yellow', '70'),
    },
    dark: {
      normal: getColor('yellow', '60'),
      hover: getColor('yellow', '70'),
      press: getColor('yellow', '80'),
    },
  },
  lightGray: {
    light: {
      normal: getColor('gray', '20'),
      hover: getColor('gray', '40'),
      press: getColor('gray', '50'),
    },
    dark: {
      normal: getColor('gray', '30'),
      hover: getColor('gray', '40'),
      press: getColor('gray', '50'),
    },
  },
  darkGray: {
    light: {
      normal: getColor('gray', '80'),
      hover: getColor('gray', '90'),
      press: getColor('gray', '100'),
    },
    dark: {
      normal: getColor('gray', '70'),
      hover: getColor('gray', '80'),
      press: getColor('gray', '90'),
    },
  },
  white: {
    light: {
      normal: getColor('white'),
      hover: getColor('gray', '10'),
      press: getColor('gray', '20'),
    },
    dark: {
      normal: getColor('white'),
      hover: getColor('gray', '10'),
      press: getColor('gray', '20'),
    },
  },
};

const filled = {
  brand: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.brand.light.normal,
          hover: stateColors.brand.light.hover,
          press: stateColors.brand.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.brand.dark.normal,
          hover: stateColors.brand.dark.hover,
          press: stateColors.brand.dark.press,
        },
      },
    },
  },
  blue: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.blue.light.normal,
          hover: stateColors.blue.light.hover,
          press: stateColors.blue.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.blue.dark.normal,
          hover: stateColors.blue.dark.hover,
          press: stateColors.blue.dark.press,
        },
      },
    },
  },
  red: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.red.light.normal,
          hover: stateColors.red.light.hover,
          press: stateColors.red.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.red.dark.normal,
          hover: stateColors.red.dark.hover,
          press: stateColors.red.dark.press,
        },
      },
    },
  },
  green: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.green.light.normal,
          hover: stateColors.green.light.hover,
          press: stateColors.green.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.green.dark.normal,
          hover: stateColors.green.dark.hover,
          press: stateColors.green.dark.press,
        },
      },
    },
  },
  yellow: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.yellow.light.normal,
          hover: stateColors.yellow.light.hover,
          press: stateColors.yellow.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.yellow.dark.normal,
          hover: stateColors.yellow.dark.hover,
          press: stateColors.yellow.dark.press,
        },
      },
    },
  },
  lightGray: {
    color: {
      fontColor: fontColorDark,
      iconColor: fontColorDark,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.lightGray.light.normal,
          hover: stateColors.lightGray.light.hover,
          press: stateColors.lightGray.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.lightGray.dark.normal,
          hover: stateColors.lightGray.dark.hover,
          press: stateColors.lightGray.dark.press,
        },
      },
    },
  },
  darkGray: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.darkGray.light.normal,
          hover: stateColors.darkGray.light.hover,
          press: stateColors.darkGray.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.darkGray.dark.normal,
          hover: stateColors.darkGray.dark.hover,
          press: stateColors.darkGray.dark.press,
        },
      },
    },
  },
  white: {
    color: {
      fontColor: fontColorDark,
      iconColor: fontColorDark,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.white.light.normal,
          hover: stateColors.white.light.hover,
          press: stateColors.white.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.white.dark.normal,
          hover: stateColors.white.dark.hover,
          press: stateColors.white.dark.press,
        },
      },
    },
  },
};

const outline = {
  brand: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.brand.light.normal,
          hover: stateColors.brand.light.hover,
          press: stateColors.brand.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.brand.dark.normal,
          hover: stateColors.brand.dark.hover,
          press: stateColors.brand.dark.press,
        },
      },
    },
  },
  blue: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.blue.light.normal,
          hover: stateColors.blue.light.hover,
          press: stateColors.blue.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.blue.dark.normal,
          hover: stateColors.blue.dark.hover,
          press: stateColors.blue.dark.press,
        },
      },
    },
  },
  red: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.red.light.normal,
          hover: stateColors.red.light.hover,
          press: stateColors.red.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.red.dark.normal,
          hover: stateColors.red.dark.hover,
          press: stateColors.red.dark.press,
        },
      },
    },
  },
  green: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.green.light.normal,
          hover: stateColors.green.light.hover,
          press: stateColors.green.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.green.dark.normal,
          hover: stateColors.green.dark.hover,
          press: stateColors.green.dark.press,
        },
      },
    },
  },
  yellow: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.yellow.light.normal,
          hover: stateColors.yellow.light.hover,
          press: stateColors.yellow.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.yellow.dark.normal,
          hover: stateColors.yellow.dark.hover,
          press: stateColors.yellow.dark.press,
        },
      },
    },
  },
  lightGray: {
    color: {
      fontColor: fontColorDark,
      iconColor: fontColorDark,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.lightGray.light.normal,
          hover: stateColors.lightGray.light.hover,
          press: stateColors.lightGray.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.lightGray.dark.normal,
          hover: stateColors.lightGray.dark.hover,
          press: stateColors.lightGray.dark.press,
        },
      },
    },
  },
  darkGray: {
    color: {
      fontColor: fontColorLight,
      iconColor: fontColorLight,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.darkGray.light.normal,
          hover: stateColors.darkGray.light.hover,
          press: stateColors.darkGray.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.darkGray.dark.normal,
          hover: stateColors.darkGray.dark.hover,
          press: stateColors.darkGray.dark.press,
        },
      },
    },
  },
  white: {
    color: {
      fontColor: fontColorDark,
      iconColor: fontColorDark,
      borderColor: `transparent`,
      light: {
        backgroundColor: {
          normal: stateColors.white.light.normal,
          hover: stateColors.white.light.hover,
          press: stateColors.white.light.press,
        },
      },
      dark: {
        backgroundColor: {
          normal: stateColors.white.dark.normal,
          hover: stateColors.white.dark.hover,
          press: stateColors.white.dark.press,
        },
      },
    },
  },
};


const ghost = {};

const buttonTokens = {
  pill: {
    small: buttonSizes.small,
    medium: buttonSizes.medium,
    large: buttonSizes.large,
    filled,
  },
  // circle: {},
};

export default buttonTokens;
