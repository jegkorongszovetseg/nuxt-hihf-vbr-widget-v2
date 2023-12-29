import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import create from '#build/mjszVbrElements.imports.mjs';

export default defineNuxtPlugin((nuxtApp) => {
  console.log("Plugin injected by my-module!", useRuntimeConfig());
  // console.log(nuxtApp);
  // const { apiKey, modules } = useRuntimeConfig().public
  //   .mjsz as Required<ModuleOptions>;

  // console.log(modules);
  // createConfig({
  //   modules: [MjszVbrElements],
  //   apiKey: apiKey,
  // });
  return create();
});
