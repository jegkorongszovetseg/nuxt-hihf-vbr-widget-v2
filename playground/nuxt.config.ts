import MjszVbrElements from "@mjsz-vbr-elements/elements";

export default defineNuxtConfig({
  modules: ["../src/module"],
  mjszVbrElements: {
    apiKey: "dd8adf5fdb738b3741fa579b5ede5ce69b681f62",
    modules: [MjszVbrElements],
  },
  devtools: { enabled: true },
});
