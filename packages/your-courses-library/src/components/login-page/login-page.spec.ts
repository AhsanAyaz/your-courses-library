import { newSpecPage } from '@stencil/core/testing';
import { LoginComponent } from './login';

describe('login', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [LoginComponent],
      html: '<login-page></login-page>',
    });
    expect(root).toEqualHtml(`
      <login-page>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </login-page>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [LoginComponent],
      html: `<login first="Stencil" last="'Don't call me a framework' JS"></login>`,
    });
    expect(root).toEqualHtml(`
      <login-page first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </login-page>
    `);
  });
});
