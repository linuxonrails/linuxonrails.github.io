import { r as registerInstance, h, H as Host } from './index-071f0344.js';

const oscwcVideoSliderCss = ":host{display:block;--gridpng:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAFklEQVR4AWMAAoP///9j0kACK6aHDgDcBFJg0X9hkQAAAABJRU5ErkJggg==')}.video-wrapper{position:relative;background-color:#000000;max-height:810;text-align:center}.video{width:100%;max-width:1440px;}.video-overlay{position:absolute;width:100%;height:100%;top:0;left:0;z-index:5;background:transparent var(--gridpng) repeat;background-color:rgba(0,0,0,0.05)}";

const OscwcVideoSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
    this.playing = true;
  }
  render() {
    return (h(Host, null, h("div", { class: "video-wrapper" }, h("video", { class: "video", poster: this.poster, preload: "auto", loop: false, autoplay: true, muted: true }, h("source", { src: this.sourcempeg, type: "video/mp4" }), h("source", { src: this.sourcewebm, type: "video/webm" })), h("div", { class: "video-overlay" }))));
  }
};
OscwcVideoSlider.style = oscwcVideoSliderCss;

export { OscwcVideoSlider as oscwc_video_slider };
