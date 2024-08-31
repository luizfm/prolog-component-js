import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraphSectionContainer: {
      margin: theme.spacing(10, 0),
    },
    titleTagBox: {
      borderBottom: `2px solid ${theme.palette.dsGrey.light}`,
      paddingBottom: theme.spacing(2),
    },
    paragraphSectionBody: {
      marginTop: theme.spacing(4),
      backgroundColor: `#f7f8f8`,
      padding: theme.spacing(5, 3, 10, 5),
      borderRadius: theme.shape.borderRadius.md,
    },
    text: {
      margin: theme.spacing(5, 0),
      color: theme.palette.dsGrey.normal,
    },
  })
);
