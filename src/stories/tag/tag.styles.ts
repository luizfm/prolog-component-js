import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: theme.shape.borderRadius.lg,
      color: theme.palette.background.paper,
      padding: theme.spacing(0.5, 2),
    },
  })
);
