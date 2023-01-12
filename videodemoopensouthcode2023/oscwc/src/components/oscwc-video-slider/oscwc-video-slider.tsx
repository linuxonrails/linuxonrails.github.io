import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'oscwc-video-slider',
  styleUrl: 'oscwc-video-slider.css',
  shadow: true,
})
export class OscwcVideoSlider {

  render() {
    return (
      <Host>
        <section id="slider" class="slider-element full-screen" style={{ height: '846px' }}>
          <div class="full-screen dark section nopadding nomargin noborder ohidden" style={{ height: '846px' }}>
            <div class="container clearfix">
              <div class="slider-caption slider-caption-center" style={{ top: '323.203px' }}>
                <h2 data-animate="fadeInUp" class="fadeInUp animated">Maratón Alpino Jarapalos</h2>
                <p class="d-none d-sm-block fadeInUp animated" data-animate="fadeInUp" data-delay="200">
                  14 de noviembre de 2020 <br />Andalucía Trail Running Series - Málaga Trail Running Series <br />
                  Campeonato Andalucía de Trail Categorías Menores
                </p>
              </div>
            </div>

            <div class="video-wrap">
              <video id="video-home" poster="https://www.maratonjarapalos.com/images/videos/explore.jpg" preload="auto" loop autoplay muted width="320" height="240" style={{ width: '1441px', height: '372.938px', top: '-15.8748px' }}>
                <source src="https://www.maratonjarapalos.com/jarapalos_2020_720p.mp4" type="video/mp4"></source>
                <source src="https://www.maratonjarapalos.com/images/videos/jarapalos_2020_720p.webm" type="video/webm"></source>
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
