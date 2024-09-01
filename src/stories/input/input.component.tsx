import { Box, TextField, TextFieldProps, Typography } from "@mui/material";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { useStyles } from "./input.styles";

export interface DSInputProps extends Omit<TextFieldProps, "variant"> {
  className?: string;
  icon?: React.ElementType;
}

export const DSInput = forwardRef<HTMLInputElement, DSInputProps>(
  ({ className, helperText, error, icon, ...restProps }, ref) => {
    const classes = useStyles();
    const ComponentIcon = icon as React.ElementType;

    return (
      <Box className={classes.inputContainer}>
        <Box
          className={clsx(classes.input, { [classes.error]: error }, className)}
        >
          {icon && (
            <ComponentIcon className={classes.startIcon} fontSize="inherit" />
          )}

          <TextField
            className={clsx(classes.textFieldInput)}
            inputRef={ref}
            variant="standard"
            fullWidth
            {...restProps}
            error={error}
          />
        </Box>
        {error && (
          <Typography className={classes.helperText}>{helperText}</Typography>
        )}
      </Box>
    );
  }
);

DSInput.displayName = "DSInput";
export default DSInput;
