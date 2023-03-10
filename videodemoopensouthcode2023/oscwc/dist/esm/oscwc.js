import { p as promiseResolve, b as bootstrapLazy } from './index-071f0344.js';

/*
 Stencil Client Patch Browser v2.21.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["oscwc-video-slider",[[1,"oscwc-video-slider",{"poster":[1],"sourcempeg":[1],"sourcewebm":[1],"playing":[32]}]]]], options);
});
