import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import "../src/styles/index.css";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      assetsInclude: ["/sb-preview/runtime.js"],
    });
  },
};
export default config;
