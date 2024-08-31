import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectContainer: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    select: {
      width: "100%",
    },
    icon: {
      color: theme.palette.dsGrey.soft,
    },
    iconOnOpen: {
      color: theme.palette.primary.main,
    },
    iconOnError: {
      color: theme.palette.error.main,
    },
    placeholder: {
      color: theme.palette.dsGrey.light,
    },
    selectIconOnOpen: {
      transform: "rotate(180deg)",
    },
    helperText: {
      margin: theme.spacing(1, 0, 0, "auto"),
      color: theme.palette.error.main,
      fontSize: "12px",
      fontWeight: theme.typography.fontWeightSemiBold,
    },

    paper: {
      borderBottomLeftRadius: theme.shape.borderRadius.md,
      borderBottomRightRadius: theme.shape.borderRadius.md,
    },

    list: {
      padding: theme.spacing(1, 0, 0),
    },

    selectOption: {
      padding: theme.spacing(1.5, 2),
      "&:not(:first-child)": {
        borderTop: `1px solid ${theme.palette.dsGrey.light}`,
      },

      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },

      '&[aria-selected="true"]': {
        color: theme.palette.primary.main,
      },
    },

    withInputIcon: {
      padding: theme.spacing(1.5, 4),
    },
  })
);
