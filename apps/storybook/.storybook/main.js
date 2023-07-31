import { join, dirname } from "path";
import linaria from "@linaria/rollup";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const tsconfigPaths = require("vite-tsconfig-paths");

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../../../packages/**/*.mdx",
    "../../../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  core: {
    disableTelemetry: true,
  },

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  async viteFinal(config, { configType }) {
    config.plugins = [
      ...config.plugins,
      tsconfigPaths.default({ loose: true }),
      linaria({
        include: ["**/*.{ts,tsx}"],
        babelOptions: {
          presets: ["@babel/preset-typescript", "@babel/preset-react"],
        },
      }),
    ];

    if (configType === "PRODUCTION") {
      config.base = "./";
    }

    return config;
  },

  docs: {
    autodocs: true
  }
};
export default config;
