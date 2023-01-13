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
        <section id="slider" class="slider-element full-screen" style={{ height: '846px' }}>
          <div class="full-screen dark section nopadding nomargin noborder ohidden" style={{ height: '846px' }}>
            <div class="container">
            { /*
              <div class="slider-caption slider-caption-center" style={{ top: '323.203px' }}>
                <h2 data-animate="fadeInUp" class="fadeInUp animated">Maratón Alpino Jarapalos</h2>
                <p class="d-none d-sm-block fadeInUp animated" data-animate="fadeInUp" data-delay="200">
                  14 de noviembre de 2020 <br />Andalucía Trail Running Series - Málaga Trail Running Series <br />
                  Campeonato Andalucía de Trail Categorías Menores
                </p>
              </div>
            */ }
            </div>

            <div class="video-wrap">
              <video id="video-home" poster={this.poster} preload="auto" loop autoplay muted>
                <source src={this.sourcempeg} type="video/mp4"></source>
                <source src={this.sourcewebm} type="video/webm"></source>
              </video>
              <div class="video-overlay" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                ...
              </div>
            </div>
          </div>
        </section>
      </Host>
    );
  }

}
