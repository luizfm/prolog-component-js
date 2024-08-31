import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      fontWeight: theme.typography.fontWeightMedium,
      borderRadius: theme.shape.borderRadius.md,
      borderWidth: "2px",
      padding: theme.spacing(2, 3.25),
      lineHeight: 1,

      "&.MuiButton-contained": {
        backgroundColor: theme.palette.primary.normal,
        color: theme.palette.common.white,

        "&:hover": {
          backgroundColor: theme.palette.primaryDark.main,
        },

        "&:disabled": {
          backgroundColor: theme.palette.primary.light,
        },

        "&:active": {
          backgroundColor: theme.palette.primary.soft,
        },
      },

      "&.MuiButton-outlined": {
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary.normal,
        color: theme.palette.primary.normal,
        borderWidth: "2px",

        "&:hover": {
          color: theme.palette.primaryDark.main,
          borderColor: theme.palette.primaryDark.main,
        },

        "&:disabled": {
          color: theme.palette.primary.light,
          borderColor: theme.palette.primary.light,
        },

        "&:active": {
          color: theme.palette.primary.soft,
          backgroundColor: theme.palette.common.white,
          borderColor: theme.palette.primary.soft,
        },
      },

      "&.MuiButton-text": {
        color: theme.palette.primary.normal,
        backgroundColor: theme.palette.common.white,

        "&:hover": {
          color: theme.palette.primaryDark.main,
        },

        "&:disabled": {
          color: theme.palette.primary.light,
        },

        "&:active": {
          color: theme.palette.primary.soft,
        },
      },
    },

    small: {
      padding: theme.spacing(1, 2),
    },

    variantText: {
      borderBottom: `2px solid transparent`,
      borderRadius: 0,
      padding: theme.spacing(0.5, 1),

      "&:hover": {
        borderBottom: `2px solid ${theme.palette.primaryDark.soft}`,
      },

      "&:active": {
        borderBottom: `2px solid ${theme.palette.primary.light}`,
      },
    },
  })
);
