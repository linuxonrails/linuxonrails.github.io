import { newSpecPage } from '@stencil/core/testing';
import { OscwcVideoSlider } from '../oscwc-video-slider';

describe('oscwc-video-slider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OscwcVideoSlider],
      html: `<oscwc-video-slider></oscwc-video-slider>`,
    });
    expect(page.root).toEqualHtml(`
      <oscwc-video-slider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </oscwc-video-slider>
    `);
  });
});
