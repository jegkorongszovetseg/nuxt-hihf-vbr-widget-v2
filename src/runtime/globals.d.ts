import type { ModuleOptions } from "#app";

declare global {
  interface Window {
    __MJSZ_VBR_WIDGET__?: ModuleOptions;
  }
}

export {};
