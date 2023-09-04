import {
  DeepString,
  Theme,
  ThemeVars,
  ThemeTypography,
  ThemeTypographyProps,
} from "./types";
import * as tokens from "./tokens";
import { mapToCSSVars } from "./utils";

const typographyProps: DeepString<ThemeTypographyProps> = {
  color: "string",
  fontSize: "string",
  letterSpacing: "string",
  lineHeight: "string",
  fontWeight: "string",
  textDecoration: "string",
};

const typographySpec: DeepString<ThemeTypography> = {
  typography: {
    // DS5
    display: { ...typographyProps },
    title1: { ...typographyProps },
    title2: { ...typographyProps },
    title3: { ...typographyProps },
    title4: { ...typographyProps },
    label: { ...typographyProps },
    body: { ...typographyProps },
    caption1: { ...typographyProps },
    caption2: { ...typographyProps },
  },
};

const themeVars: ThemeVars = mapToCSSVars({
  ...tokens,
  colors: {
    scheme: "light",
    background: tokens.colors.light.atmo2,
    ...tokens.colors.common,
    ...tokens.colors.light,
  },
  ...typographySpec,
});

const spacing = (value: string | number | (string | number)[]): string => {
  switch (typeof value) {
    case "number":
      return `calc(${themeVars.space.base} * ${value}px)`;
    case "string":
      return themeVars.space[value] || value;
    case "object":
      return value && value.length > 0
        ? value
            .map((x) => {
              switch (typeof x) {
                case "number":
                  return `${x}px`;
                case "string":
                  return themeVars.space[x] || x;
                default:
                  return "0px";
              }
            })
            .join(" ")
        : "0px";
    default:
      return "0px";
  }
};

export const theme: Theme = {
  ...themeVars,
  spacing,
};
