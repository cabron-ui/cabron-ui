import {
  ThemeTokens,
  ThemeColors,
  ThemeColorScheme,
  ThemeTypography,
} from "./tokens";
import { DeepString } from "./utils";

type ColorMode = ThemeColors & {
  background: string;
  scheme: ThemeColorScheme;
};

export type BaseTheme = "ds3" | "ds5";

export type ThemeSpec = {
  name: string;
  base?: BaseTheme;
} & ThemeTypography &
  Omit<ThemeTokens, "colors"> & {
    colors: {
      modes: {
        [key: string]: ColorMode;
      };
    };
  };

export type ThemeCustom = { name: string } & ThemeTypography &
  Partial<Omit<ThemeTokens, "colors">> & {
    colors: {
      modes: {
        [key: string]: Partial<ColorMode>;
      };
    };
  };

export type ThemeVars = DeepString<ThemeTokens> & DeepString<ThemeTypography>;

export type ThemeUtils = {
  spacing: (value: string | number | (string | number)[]) => string;
};

export type Theme = ThemeVars & ThemeUtils;
