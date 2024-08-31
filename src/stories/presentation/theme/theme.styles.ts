import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    themeContainer: {
      padding: theme.spacing(10),
    },
    sectionTitle: {
      marginBottom: theme.spacing(5),
    },
    sectionWrapper: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: theme.spacing(10),
    },
  })
);
