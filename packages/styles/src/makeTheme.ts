import * as tokens from "./tokens";
import { theme } from "./theme";
import { Theme, ThemeSpec, ThemeCustom } from "./types/theme";

const mergeTheme = (...tokens) => {
  console.log('tokens: ', tokens);
  const isObject = (obj: Theme) => obj && typeof obj === "object";

  return tokens.reduce((prev, token) => {
    Object.keys(token).forEach((key) => {
      const pVal = prev[key];
      const val = token[key];

      if (isObject(pVal) && isObject(val)) {
        prev[key] = pVal ? val : mergeTheme(pVal, val);
      } else {
        prev[key] = val;
      }
    });

    return prev;
  }, {});
};

/**
 * Generate a theme based on the options received.
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

  return mergeTheme(tokens, opt);
};
