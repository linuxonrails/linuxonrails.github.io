import { Host, h } from '@stencil/core';
export class OscwcVideoSlider {
  constructor() {
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
    this.playing = true;
  }
  render() {
    return (h(Host, null, h("div", { class: "video-wrapper" }, h("video", { class: "video", poster: this.poster, preload: "auto", loop: false, autoplay: true, muted: true }, h("source", { src: this.sourcempeg, type: "video/mp4" }), h("source", { src: this.sourcewebm, type: "video/webm" })), h("div", { class: "video-overlay" }))));
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
      "sourcempeg": {
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
        "attribute": "sourcempeg",
        "reflect": false
      },
      "sourcewebm": {
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
        "attribute": "sourcewebm",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "playing": {}
    };
  }
}
