import { r as registerInstance, h, H as Host } from './index-071f0344.js';

const oscwcVideoSliderCss = ":host{display:block;--gridpng:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAFklEQVR4AWMAAoP///9j0kACK6aHDgDcBFJg0X9hkQAAAABJRU5ErkJggg==')}.video-wrapper{outline:1px dotted red;position:relative;background-color:white;max-height:810px;text-align:center}.video{outline:1px dashed blue;width:100%;max-width:1440px;}.video-overlay{outline:1px dashed green;position:absolute;width:100%;height:100%;top:0;left:0;z-index:5;background:transparent var(--gridpng) repeat;background-color:rgba(0,0,0,0.05)}";

const OscwcVideoSlider = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
  }
  render() {
    return (h(Host, null, h("div", { class: "video-wrapper" }, h("video", { class: "video", poster: this.poster, preload: "auto", loop: true, autoplay: true, muted: true }, h("source", { src: this.sourcempeg, type: "video/mp4" }), h("source", { src: this.sourcewebm, type: "video/webm" })), h("div", { class: "video-overlay" }))));
  }
};
OscwcVideoSlider.style = oscwcVideoSliderCss;

export { OscwcVideoSlider as oscwc_video_slider };
