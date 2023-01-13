'use strict';

const index = require('./index-f10742f1.js');

/*
 Stencil Client Patch Browser v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('oscwc.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["oscwc-video-slider.cjs",[[1,"oscwc-video-slider",{"poster":[1],"sourcempeg":[1],"sourcewebm":[1],"playing":[32]}]]]], options);
});
