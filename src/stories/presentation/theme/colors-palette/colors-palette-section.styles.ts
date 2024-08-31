import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    titleTagBox: {
      borderBottom: `2px solid ${theme.palette.dsGrey.light}`,
      paddingBottom: theme.spacing(2),
    },
    paletteBox: {
      marginTop: theme.spacing(3),
      display: "flex",
      flexDirection: "column",
      rowGap: theme.spacing(4),
    },
    colorBox: {
      borderRadius: theme.shape.borderRadius.lg,
      overflow: "hidden",
      width: "100%",
    },
    shadeBox: {
      padding: theme.spacing(2, 4),
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  })
);
