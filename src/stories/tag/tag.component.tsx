import { Typography } from "@mui/material";

import { useStyles } from "./tag.styles";

export interface DSTagProps {
  label: string;
}

export function DSTag({ label }: DSTagProps) {
  const classes = useStyles();

  return (
    <Typography className={classes.label} component="span">
      {label}
    </Typography>
  );
}

export default DSTag;
