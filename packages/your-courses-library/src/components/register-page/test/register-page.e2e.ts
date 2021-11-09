import { newE2EPage } from '@stencil/core/testing';

describe('register-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<register-page></register-page>');

    const element = await page.find('register-page');
    expect(element).toHaveClass('hydrated');
  });
});
