import { createTheme } from "@mui/material/styles";
import { customWeights } from "./custom-weights";
import { palette } from "./colors";
import { fontSizes } from "./custom-typography-tag";

export const globalTheme = createTheme({
  shape: {
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 16,
      full: 9999,
    },
  },
  typography: {
    fontFamilySecondary: "Montserrat, sans-serif",
    fontFamily: "Prompt, sans-serif",
    ...customWeights,
    h1: {
      fontSize: fontSizes.h1,
      fontWeight: customWeights.fontWeightBold,
    },
    h2: {
      fontSize: fontSizes.h2,
      fontWeight: customWeights.fontWeightSemiBold,
    },
    h3: {
      fontSize: fontSizes.h3,
      fontWeight: customWeights.fontWeightRegular,
    },
    body1: {
      fontSize: fontSizes.body1,
      fontWeight: customWeights.fontWeightLight,
      lineHeight: 1.5,
    },
  },
  palette,
});
