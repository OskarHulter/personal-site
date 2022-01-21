module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-storyshorts",
    "storybook-dark-mode",
    "storybook-addon-next-router",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}