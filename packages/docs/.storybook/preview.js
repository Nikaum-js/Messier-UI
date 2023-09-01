import { themes } from '@storybook/theming';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: themes.dark
  },
backgrounds: {
      default: 'dark'
  },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
