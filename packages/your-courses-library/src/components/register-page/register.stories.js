// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Register Page',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const Default = () => `
  <register-page></register-page>
`;
