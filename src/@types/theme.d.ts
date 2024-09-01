import "@mui/material/styles";
import "@mui/material";
import "@mui/material/Typography";

declare module "@mui/material" {
  export interface Theme {
    shape: {
      borderRadius: {
        sm: number;
        md: number;
        lg: number;
        full: number;
      };
    };
  }

  export interface Palette {
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
  export interface TypographyVariants {
    fontFamilySecondary: React.CSSProperties["fontFamily"];
    fontWeightSemiBold: React.CSSProperties["fontWeight"];
  }

  // allow configuration using `createTheme`
  export interface TypographyVariantsOptions {
    fontFamilySecondary?: React.CSSProperties["fontFamily"];
    fontWeightSemiBold?: React.CSSProperties["fontWeight"];
  }

  export interface PaletteColor {
    light?: string;
    soft?: string;
    normal?: string;
    dark?: string;
    main?: string;
  }

  export interface SimplePaletteColorOptions {
    light?: string;
    soft?: string;
    normal?: string;
    dark?: string;
    main?: string;
  }

  export interface PaletteOptions {
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

  export interface ThemeOptions {
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
  export interface TypographyPropsVariantOverrides {
    fontFamilySecondary: true;
    fontWeightSemiBold: true;
  }
}

declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    primaryDark: true;
  }
}
