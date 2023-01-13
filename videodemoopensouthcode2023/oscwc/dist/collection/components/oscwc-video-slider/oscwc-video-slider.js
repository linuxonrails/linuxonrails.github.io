import { Host, h } from '@stencil/core';
export class OscwcVideoSlider {
  constructor() {
    this.poster = undefined;
    this.sourceMpeg = undefined;
    this.sourceWebm = undefined;
  }
  render() {
    return (h(Host, null, h("section", { id: "slider", class: "slider-element full-screen", style: { height: '846px' } }, h("div", { class: "full-screen dark section nopadding nomargin noborder ohidden", style: { height: '846px' } }, h("div", { class: "container" }), h("div", { class: "video-wrap" }, h("video", { id: "video-home", poster: this.poster, preload: "auto", loop: true, autoplay: true, muted: true }, h("source", { src: this.sourceMpeg, type: "video/mp4" }), h("source", { src: this.sourceWebm, type: "video/webm" })), h("div", { class: "video-overlay", style: { backgroundColor: 'rgba(0,0,0,0.05)' } }, "..."))))));
  }
  static get is() { return "oscwc-video-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["oscwc-video-slider.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["oscwc-video-slider.css"]
    };
  }
  static get properties() {
    return {
      "poster": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "poster",
        "reflect": false
      },
      "sourceMpeg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "source-mpeg",
        "reflect": false
      },
      "sourceWebm": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "source-webm",
        "reflect": false
      }
    };
  }
}
