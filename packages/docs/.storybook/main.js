const config = {
  framework: "@storybook/react-vite",
  stories: ["../src/pages/**/*.stories.mdx", "../src/stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@storybook/addon-a11y'],
  docs: {
    autodocs: true,
  },
};

export default config;