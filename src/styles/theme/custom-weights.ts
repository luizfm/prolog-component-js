export enum TypographyFontName {
  Light = "fontWeightLight",
  Regular = "fontWeightRegular",
  SemiBold = "fontWeightSemiBold",
  Bold = "fontWeightBold",
}

export const customWeights = {
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
};

export const FONT_WEIGHTS = [
  {
    name: "Light",
    weight: customWeights.fontWeightLight,
    fontWeight: TypographyFontName.Light,
  },
  {
    name: "Regular",
    weight: customWeights.fontWeightRegular,
    fontWeight: TypographyFontName.Regular,
  },
  {
    name: "Semibold",
    weight: customWeights.fontWeightSemiBold,
    FontWeight: TypographyFontName.SemiBold,
  },
  {
    name: "Bold",
    weight: customWeights.fontWeightBold,
    fontWeight: TypographyFontName.Bold,
  },
];
