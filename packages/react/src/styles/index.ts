import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from "@messier-ui/tokens";

import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
  keyframes,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },

  theme: {
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    fontSizes: fontSizes,
    colors: colors,
    fonts: fonts,
    radii: radii,
    space: space,
  },
});
