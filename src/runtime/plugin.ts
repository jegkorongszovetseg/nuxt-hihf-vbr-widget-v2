import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import create from '#build/mjszVbrElements.imports.mjs';

export default defineNuxtPlugin((nuxtApp) => {
  const vueApp = nuxtApp.vueApp;
  return create(vueApp);
});
