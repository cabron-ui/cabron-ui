import { ThemeSpec, DeepString } from "./types";

export const parseTheme = (
  themes: ThemeSpec[],
  name: string = "",
  mode: string = "",
) => {
  const theme: ThemeSpec = themes.find((t) => t.name === name) || themes[0];
  const colorModes: string[] = Object.keys(theme.colors.modes);
  const colorMode: string = colorModes.includes(mode) ? mode : colorModes[0];
  const colorScheme = theme.colors.modes[colorMode].scheme;

  return {
    theme,
    colorMode,
    colorModes,
    colorScheme,
  };
};

export const mapToCSSVars = <T extends object>(
  obj: T,
  prefix: string = "--uikit",
): DeepString<T> => {
  const vars = {} as DeepString<T>;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "object" && value !== null) {
      vars[key] = mapToCSSVars(value, `${prefix}-${key}`);
    } else {
      vars[key] = `var(${prefix}-${key})`;
    }
  }

  return vars;
};
