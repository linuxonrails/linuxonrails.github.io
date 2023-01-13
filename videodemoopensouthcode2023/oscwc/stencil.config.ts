import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'oscwc',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'dist/components/assets',
          warn: true,
        }
      ]
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'build/components/assets',
          warn: true,
        }
      ]
    },
  ],
};
