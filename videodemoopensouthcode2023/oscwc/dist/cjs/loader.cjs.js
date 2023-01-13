'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-6a0b3e49.js');

/*
 Stencil Client Patch Esm v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-component_2.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"oscwc-video-slider",{"poster":[1],"sourcempeg":[1],"sourcewebm":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
