/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface OscwcVideoSlider {
        "poster": string;
        "sourcempeg": string;
        "sourcewebm": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLOscwcVideoSliderElement extends Components.OscwcVideoSlider, HTMLStencilElement {
    }
    var HTMLOscwcVideoSliderElement: {
        prototype: HTMLOscwcVideoSliderElement;
        new (): HTMLOscwcVideoSliderElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "oscwc-video-slider": HTMLOscwcVideoSliderElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface OscwcVideoSlider {
        "poster"?: string;
        "sourcempeg"?: string;
        "sourcewebm"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "oscwc-video-slider": OscwcVideoSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "oscwc-video-slider": LocalJSX.OscwcVideoSlider & JSXBase.HTMLAttributes<HTMLOscwcVideoSliderElement>;
        }
    }
}
