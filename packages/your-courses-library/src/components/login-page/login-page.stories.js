// my-component.stories.js
import readme from './readme.md';

export default {
  title: 'Login Page',
  parameters: {
    notes: {
      markdown: readme,
    },
  },
};

export const Default = () => `
  <login-page first="Millie" middle="Bobby" last="Brown"></login-page>
`;
