import type { Components, JSX } from "../types/components";

interface OscwcVideoSlider extends Components.OscwcVideoSlider, HTMLElement {}
export const OscwcVideoSlider: {
  prototype: OscwcVideoSlider;
  new (): OscwcVideoSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
