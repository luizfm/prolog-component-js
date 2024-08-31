import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    input: {
      fontSize: "30px",
      paddingBottom: theme.spacing(1),
      display: "flex",
      alignItems: "flex-end",
      borderBottom: `2px solid ${theme.palette.dsGrey.normal}`,

      "&:focus-within": {
        borderBottom: `2px solid ${theme.palette.primary.main}`,

        "& $startIcon": {
          color: theme.palette.primary.main,
        },
      },
    },

    error: {
      borderBottom: `2px solid ${theme.palette.error.main}`,

      "& $startIcon": {
        color: theme.palette.error.main,
      },

      "& $textFieldInput": {
        "& .MuiFormLabel-root": {
          color: theme.palette.dsGrey.normal,

          "&[data-shrink='true']": {
            color: theme.palette.primary.main,
          },
        },
      },
    },

    startIcon: {
      margin: theme.spacing(0, 0.5),
      color: theme.palette.dsGrey.normal,
    },
    textFieldInput: {
      "& .MuiInputBase-root.MuiInput-root": {
        borderBottom: "none",

        "&:before": {
          borderBottom: "none",
        },

        "&:after": {
          borderBottom: "none",
        },

        "&:hover": {
          "&:before": {
            borderBottom: "none",
          },

          "&:after": {
            borderBottom: "none",
          },
        },
      },
    },

    helperText: {
      fontSize: "12px",
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.error.main,
      margin: theme.spacing(1, 0, 0, "auto"),
    },
  })
);
