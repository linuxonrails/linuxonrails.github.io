import { p as promiseResolve, b as bootstrapLazy } from './index-d1b4f073.js';

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
  return bootstrapLazy([["my-component_2",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}],[1,"oscwc-video-slider",{"poster":[1],"sourceMpeg":[1,"source-mpeg"],"sourceWebm":[1,"source-webm"]}]]]], options);
});
