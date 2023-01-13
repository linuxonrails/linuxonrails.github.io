'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f10742f1.js');

const oscwcVideoSliderCss = ":host{display:block;--gridpng:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAFklEQVR4AWMAAoP///9j0kACK6aHDgDcBFJg0X9hkQAAAABJRU5ErkJggg==')}.video-wrapper{position:relative;background-color:#000000;max-height:810;text-align:center}.video{width:100%;max-width:1440px;}.video-overlay{position:absolute;width:100%;height:100%;top:0;left:0;z-index:5;background:transparent var(--gridpng) repeat;background-color:rgba(0,0,0,0.05)}";

const OscwcVideoSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
    this.playing = true;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "video-wrapper" }, index.h("video", { class: "video", poster: this.poster, preload: "auto", loop: false, autoplay: true, muted: true }, index.h("source", { src: this.sourcempeg, type: "video/mp4" }), index.h("source", { src: this.sourcewebm, type: "video/webm" })), index.h("div", { class: "video-overlay" }))));
  }
};
OscwcVideoSlider.style = oscwcVideoSliderCss;

exports.oscwc_video_slider = OscwcVideoSlider;
