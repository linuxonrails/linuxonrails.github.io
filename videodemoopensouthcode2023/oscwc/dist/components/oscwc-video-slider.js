import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const oscwcVideoSliderCss = ":host{display:block;--gridpng:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAFklEQVR4AWMAAoP///9j0kACK6aHDgDcBFJg0X9hkQAAAABJRU5ErkJggg==')}.video-wrapper{position:relative;background-color:#000000;max-height:810;text-align:center}.video{width:100%;max-width:1440px;}.video-overlay{position:absolute;width:100%;height:100%;top:0;left:0;z-index:5;background:transparent var(--gridpng) repeat;background-color:rgba(0,0,0,0.05)}";

const OscwcVideoSlider$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
    this.playing = true;
  }
  render() {
    return (h(Host, null, h("div", { class: "video-wrapper" }, h("video", { class: "video", poster: this.poster, preload: "auto", loop: true, autoplay: true, muted: true }, h("source", { src: this.sourcempeg, type: "video/mp4" }), h("source", { src: this.sourcewebm, type: "video/webm" })), h("div", { class: "video-overlay" }))));
  }
  static get style() { return oscwcVideoSliderCss; }
}, [1, "oscwc-video-slider", {
    "poster": [1],
    "sourcempeg": [1],
    "sourcewebm": [1],
    "playing": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["oscwc-video-slider"];
  components.forEach(tagName => { switch (tagName) {
    case "oscwc-video-slider":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, OscwcVideoSlider$1);
      }
      break;
  } });
}

const OscwcVideoSlider = OscwcVideoSlider$1;
const defineCustomElement = defineCustomElement$1;

export { OscwcVideoSlider, defineCustomElement };
