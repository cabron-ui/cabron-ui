import * as tokens from "../tokens";
import { colors } from "../tokens/colors";
import { CSSProperties } from "./utils";

export type ThemeColorScheme = "light" | "dark";

export type ThemeColors = typeof colors.common & typeof colors.light;

const flattenTokens = {
  ...tokens,
  colors: {
    scheme: "light",
    background: tokens.colors.light.atmo2,
    ...tokens.colors.common,
    ...tokens.colors.light,
  },
};

export type ThemeTokens = typeof flattenTokens;

export type ThemeTypographyProps = Pick<
  CSSProperties,
  | "color"
  | "fontSize"
  | "letterSpacing"
  | "lineHeight"
  | "fontWeight"
  | "textDecoration"
>;

export type ThemeTypography = {
  typography: {
    display: ThemeTypographyProps;
    title1: ThemeTypographyProps;
    title2: ThemeTypographyProps;
    title3: ThemeTypographyProps;
    title4: ThemeTypographyProps;
    label: ThemeTypographyProps;
    body: ThemeTypographyProps;
    caption1: ThemeTypographyProps;
    caption2: ThemeTypographyProps;
  };
};
