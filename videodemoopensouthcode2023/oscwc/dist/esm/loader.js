import { p as promiseResolve, b as bootstrapLazy } from './index-071f0344.js';

/*
 Stencil Client Patch Esm v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["oscwc-video-slider",[[1,"oscwc-video-slider",{"poster":[1],"sourcempeg":[1],"sourcewebm":[1]}]]]], options);
  });
};

export { defineCustomElements };
