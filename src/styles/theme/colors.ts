const primaryDark = {
  light: "#2E3D80",
  soft: "#253166",
  main: "#253166",
  normal: "#1B244C",
  dark: "#131A36",
};

const secondaryOrange = {
  light: "#ffdb60",
  soft: "#ffc936",
  main: "#ffa92c",
  normal: "#ffa92c",
  dark: "#fe7c25",
};

export const palette = {
  primary: {
    light: "#A1B5FF",
    soft: "#7A97FF",
    main: "#7A97FF",
    normal: "#5579FF",
    dark: "#3D5FD9",
  },
  primaryDark,
  secondary: {
    ...primaryDark,
  },
  secondaryOrange,
  error: {
    ...secondaryOrange,
  },
  secondaryGreen: {
    light: "#b1eace",
    soft: "#03cf8e",
    normal: "#00b75f",
    dark: "#009547",
  },
  dsGrey: {
    light: "#BEC7D4",
    soft: "#AAB2BD",
    normal: "#939AA3",
    dark: "#70767D",
  },
};

export const COLORS = Object.entries(palette).map(([color, shades]) => {
  return {
    name: color,
    shades: Object.entries(shades).map(([shade, value]) => ({
      name: shade,
      value: value,
    })),
  };
});

export enum Color {
  primary = "primary",
  primaryDark = "primaryDark",
  secondaryOrange = "secondaryOrange",
  secondaryGreen = "secondaryGreen",
  dsGrey = "dsGrey",
}

export enum Shade {
  light = "light",
  soft = "soft",
  normal = "normal",
  dark = "dark",
}
