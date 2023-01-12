import { newE2EPage } from '@stencil/core/testing';

describe('oscwc-video-slider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<oscwc-video-slider></oscwc-video-slider>');

    const element = await page.find('oscwc-video-slider');
    expect(element).toHaveClass('hydrated');
  });
});
