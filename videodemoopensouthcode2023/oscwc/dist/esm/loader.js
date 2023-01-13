import { p as promiseResolve, b as bootstrapLazy } from './index-d1b4f073.js';

/*
 Stencil Client Patch Esm v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"oscwc-video-slider",{"poster":[1],"sourceMpeg":[1,"source-mpeg"],"sourceWebm":[1,"source-webm"]}]]]], options);
  });
};

export { defineCustomElements };
