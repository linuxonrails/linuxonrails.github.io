import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'oscwc-video-slider',
  styleUrl: 'oscwc-video-slider.css',
  shadow: true,
})
export class OscwcVideoSlider {
  @Prop() poster: string;
  @Prop() sourcempeg: string;
  @Prop() sourcewebm: string;

  @State() playing: boolean = true;

  render() {
    return (
      <Host>
        <div class="video-wrapper">
          <video class="video" poster={this.poster} preload="auto" loop={false} autoplay={true} muted>
            <source src={this.sourcempeg} type="video/mp4"></source>
            <source src={this.sourcewebm} type="video/webm"></source>
          </video>
          <div class="video-overlay" />
        </div>
        {/* <button onClick={() => this.playing = false}>to the end</button> */}
      </Host>
    );
  }

}
