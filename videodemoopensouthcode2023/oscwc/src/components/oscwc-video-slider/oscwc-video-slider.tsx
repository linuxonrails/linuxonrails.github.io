import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'oscwc-video-slider',
  styleUrl: 'oscwc-video-slider.css',
  shadow: true,
})
export class OscwcVideoSlider {
  @Prop() poster: string;
  @Prop() sourcempeg: string;
  @Prop() sourcewebm: string;

  render() {
    return (
      <Host>
        <div class="video-wrapper">
          <video class="video" poster={this.poster} preload="auto" loop autoplay muted>
            <source src={this.sourcempeg} type="video/mp4"></source>
            <source src={this.sourcewebm} type="video/webm"></source>
          </video>
          <div class="video-overlay" />
        </div>
      </Host>
    );
  }

}
