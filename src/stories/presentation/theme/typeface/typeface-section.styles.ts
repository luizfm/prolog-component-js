import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleTagBox: {
      borderBottom: `2px solid ${theme.palette.dsGrey.light}`,
      paddingBottom: theme.spacing(2),
    },
    fontBox: {
      margin: theme.spacing(4, 0),
    },
    fontName: {
      marginBottom: theme.spacing(2),
    },
    weightContainer: {
      marginTop: theme.spacing(1),
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    },
    fontSizesContainer: {
      marginTop: theme.spacing(12),
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing(2),
    },
    fontSizeBox: {
      display: "flex",
      columnGap: theme.spacing(4),
      alignItems: "center",
      width: "100%",
    },
    fontSizeText: {
      color: theme.palette.secondaryOrange.normal,
    },
  })
);
