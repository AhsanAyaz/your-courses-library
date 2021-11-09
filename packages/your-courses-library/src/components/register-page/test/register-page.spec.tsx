import { newSpecPage } from '@stencil/core/testing';
import { RegisterPage } from '../register-page';

describe('register-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RegisterPage],
      html: `<register-page></register-page>`,
    });
    expect(page.root).toEqualHtml(`
      <register-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </register-page>
    `);
  });
});
