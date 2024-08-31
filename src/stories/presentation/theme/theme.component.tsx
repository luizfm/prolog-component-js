import { Box, Typography } from "@mui/material";

import { styles } from "./theme.styles";
import { TypefaceSection } from "./typeface/typeface-section.component";
import { ParagraphSection } from "./paragraph/paragraph-section.component";
import { ColorsPaletteSection } from "./colors-palette/colors-palette-section.component";

export function Theme() {
  const classes = styles();

  return (
    <Box>
      <Typography
        className={classes.sectionTitle}
        component="h1"
        variant="h3"
        fontWeight="fontWeightBold"
      >
        Style Guide
      </Typography>

      <Box className={classes.sectionWrapper}>
        <Box>
          <TypefaceSection />

          <ParagraphSection />
        </Box>

        <ColorsPaletteSection />
      </Box>
    </Box>
  );
}
