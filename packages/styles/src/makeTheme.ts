import * as tokens from "./tokens";
import { theme } from "./theme";
import { Theme, ThemeSpec, ThemeCustom } from "./types/theme";

const mergeTheme = (...objects) => {
  const isObject = (obj) => obj && typeof obj === "object";

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (isObject(pVal) && isObject(oVal)) {
        prev[key] = pVal ? oVal : mergeTheme(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
};

/**
 * Generate a theme base on the options received.
 * Takes an incomplete theme object and adds the missing parts.
 *
 * @param options The options to generate the theme
 * @returns The generated theme
 */
export const makeTheme = (
  options: ThemeCustom | ((theme: Theme) => ThemeCustom),
): ThemeSpec => {
  const opt: ThemeCustom =
    typeof options === "function" ? options(theme) : options;

  const newTheme = mergeTheme(tokens, opt);

  return newTheme;
};
