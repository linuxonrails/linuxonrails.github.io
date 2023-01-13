import { Host, h } from '@stencil/core';
export class OscwcVideoSlider {
  constructor() {
    this.poster = undefined;
    this.sourcempeg = undefined;
    this.sourcewebm = undefined;
  }
  render() {
    return (h(Host, null, h("section", { id: "slider", class: "slider-element full-screen", style: { height: '846px' } }, h("div", { class: "full-screen dark section nopadding nomargin noborder ohidden", style: { height: '846px' } }, h("div", { class: "container" }), h("div", { class: "video-wrap" }, h("video", { id: "video-home", poster: this.poster, preload: "auto", loop: true, autoplay: true, muted: true }, h("source", { src: this.sourcempeg, type: "video/mp4" }), h("source", { src: this.sourcewebm, type: "video/webm" })), h("div", { class: "video-overlay", style: { backgroundColor: 'rgba(0,0,0,0.05)' } }, "..."))))));
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
}
