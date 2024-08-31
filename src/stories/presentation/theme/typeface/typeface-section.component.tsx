import { Box, Typography, TypographyProps } from "@mui/material";
import { DSTag } from "../../../tag/tag.component";

import { useStyles } from "./typeface-section.styles";
import { FONT_WEIGHTS } from "../../../../styles/theme/custom-weights";
import { TYPOGRAPHIES } from "../../../../styles/theme/custom-typography-tag";

export function TypefaceSection() {
  const classes = useStyles();

  const lastTypographyIndex = TYPOGRAPHIES.length - 1;

  return (
    <Box>
      <Box className={classes.titleTagBox}>
        <DSTag label="1. Typeface" />
      </Box>

      <Box className={classes.fontBox}>
        <Typography
          className={classes.fontName}
          fontWeight={"fontWeightRegular"}
        >
          Prompt
        </Typography>
        <Box className={classes.weightContainer}>
          {FONT_WEIGHTS.map((weight) => (
            <Box key={weight.name}>
              <Typography variant="h2" {...weight}>
                Aa
              </Typography>
              <Typography variant="body1">{weight.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.fontBox}>
        <Typography fontWeight="fontWeightSemiBold">Montserrat</Typography>
        <Box className={classes.weightContainer}>
          {FONT_WEIGHTS.map((weight) => (
            <Box key={weight.name}>
              <Typography
                variant="h2"
                fontFamily="fontFamilySecondary"
                {...weight}
              >
                Aa
              </Typography>
              <Typography variant="body1">{weight.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.fontSizesContainer}>
        {TYPOGRAPHIES.map((font, index) => (
          <Box key={font.name} className={classes.fontSizeBox}>
            <Typography variant="h3" className={classes.fontSizeText}>
              {font.size}
            </Typography>
            <Typography
              variant={font.typography as TypographyProps["variant"]}
              fontWeight={"fontWeightLight"}
              {...(index === lastTypographyIndex && {
                fontFamily: "fontFamilySecondary",
              })}
            >
              {index === lastTypographyIndex
                ? "Montserrat Text font"
                : `${font.name} - Prompt Title font`}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
