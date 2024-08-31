import { Button, ButtonProps, Typography } from "@mui/material";
import clsx from "clsx";

import { useStyles } from "./button.styles";

export interface DSButtonProps extends Omit<ButtonProps, "color"> {
  icon?: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  size?: "large" | "small";
  className?: string;
  children: React.ReactNode | string;
}

export function DSButton({
  icon,
  variant = "contained",
  size = "large",
  className,
  children,
  disabled,
}: DSButtonProps) {
  const classes = useStyles();
  const typedSize = size as keyof typeof classes;

  return (
    <Button
      startIcon={icon}
      variant={variant}
      className={clsx(
        classes.button,
        { [classes.variantText]: variant === "text" },
        classes[typedSize],
        className
      )}
      disableRipple
      disabled={disabled}
    >
      <Typography component="span">{children}</Typography>
    </Button>
  );
}
