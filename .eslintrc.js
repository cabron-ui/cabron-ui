module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-cabron-ui`
  extends: ["@cabron-ui/eslint-config-cabron-ui"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
