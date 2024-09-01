import React from "react";

import { render, RenderOptions } from "@testing-library/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { globalTheme } from "../styles/theme/theme";
import { ReactElement } from "react";

export interface WrapperProps {
  children: React.ReactNode;
}

export const renderWithWrapper = (
  ui: ReactElement,
  options?: RenderOptions
) => {
  const Wrapper = ({ children }: WrapperProps) => {
    return (
      <ThemeProvider theme={globalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Wrapper, ...options });
};
