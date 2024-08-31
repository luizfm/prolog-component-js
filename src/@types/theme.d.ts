import "@mui/material/styles";
import "@mui/material";
import "@mui/material/Typography";

declare module "@mui/material" {
  interface Theme {
    shape: {
      borderRadius: {
        sm: number;
        md: number;
        lg: number;
        full: number;
      };
    };
  }

  interface Palette {
    dsGrey: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
    primaryDark: {
      light: string;
      soft: string;
      main: string;
      normal: string;
      dark: string;
    };
    secondaryOrange: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
    secondaryGreen: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontFamilySecondary: React.CSSProperties["fontFamily"];
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    fontFamilySecondary?: React.CSSProperties["fontFamily"];
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
  }

  interface PaletteColor {
    light?: string;
    soft?: string;
    normal?: string;
    dark?: string;
    main?: string;
  }

  interface SimplePaletteColorOptions {
    light?: string;
    soft?: string;
    normal?: string;
    dark?: string;
    main?: string;
  }

  interface PaletteOptions {
    dsGrey: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
    primaryDark: {
      light: string;
      soft: string;
      main: string;
      normal: string;
      dark: string;
    };
    secondaryOrange: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
    secondaryGreen: {
      light: string;
      soft: string;
      normal: string;
      dark: string;
    };
  }

  interface ThemeOptions {
    shape: {
      borderRadius: {
        sm: number;
        md: number;
        lg: number;
        full: number;
      };
    };
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontFamilySecondary: true;
    fontWeightSemiBold: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    primaryDark: true;
  }
}
