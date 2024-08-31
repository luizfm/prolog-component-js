import { Box, Typography } from "@mui/material";
import { DSTag } from "../../../tag/tag.component";

import { useStyles } from "./paragraph-section.styles";
import { DSButton } from "../../../button/button.component";

export function ParagraphSection() {
  const classes = useStyles();

  return (
    <Box className={classes.paragraphSectionContainer}>
      <Box className={classes.titleTagBox}>
        <DSTag label="2. Parágrafo" />
      </Box>

      <Box className={classes.paragraphSectionBody}>
        <Typography variant="h2" component="h2">
          Prolog title font lorem impsum
        </Typography>

        <Typography className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua
        </Typography>

        <DSButton>Entrar em contato</DSButton>
      </Box>
    </Box>
  );
}
