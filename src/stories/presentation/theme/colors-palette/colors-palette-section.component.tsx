import { Box, Typography } from "@mui/material";
import { DSTag } from "../../../tag/tag.component";

import { useStyles } from "./colors-palette-section.styles";
import { COLORS } from "../../../../styles/theme/colors";

export function ColorsPaletteSection() {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.titleTagBox}>
        <DSTag label="3. Paleta de Cores" />
      </Box>

      <Box className={classes.paletteBox}>
        {COLORS.map((color) => (
          <Box key={color.name} className={classes.colorBox}>
            {color.shades.map((shade) => (
              <Box
                key={shade.name}
                sx={{ backgroundColor: shade.value }}
                className={classes.shadeBox}
              >
                <Typography fontWeight="fontWeightSemiBold">
                  {shade.name}
                </Typography>
                <Typography fontWeight="fontWeightSemiBold">
                  {shade.value}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
