import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addTemplate,
  resolvePath,
} from "@nuxt/kit";
import { readPackageJSON } from "pkg-types";

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiKey: string;
  gameResolver?: () => string | string;
  teamResolver?: () => string | string;
  playerResolver?: () => string | string;
}

export interface Modules {
  name: string;
  package: any;
}

const { resolve } = createResolver(import.meta.url);

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@mjsz-vbr-elements/nuxt",
    configKey: "mjszVbrElements",
    compatibility: {
      nuxt: "^3",
    },
  },
  defaults: {
    apiKey: "",
  },
  async setup(options, nuxt) {
    const pkg = await readPackageJSON(nuxt.options.rootDir);
    const coreDeps = Object.keys({
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }).filter((d) => d.startsWith("@mjsz-vbr-elements/"));

    const modules: Modules[] = [];

    for (const mod of new Set([...coreDeps])) {
      if (
        mod === "@mjsz-vbr-elements/core" ||
        mod === "@mjsz-vbr-elements/nuxt"
      )
        continue;
      const entry = await resolvePath(mod);
      if (entry === mod) continue;

      const name = mod.split("/")[1];
      modules.push({ name, package: mod });
    }

    nuxt.options.vue.compilerOptions.isCustomElement = (tag) =>
      tag.startsWith("mjsz-vbr-");

    addTemplate({
      filename: "mjszVbrElements.imports.mjs",
      getContents: () => generateImports(options, modules),
      write: true,
    });

    addPlugin({ src: resolve("./runtime/plugin"), mode: "client" });
  },
});

const generateImports = ({ apiKey }: ModuleOptions, modules: Modules[]) => `
  import MjszVbrElementsCore from "@mjsz-vbr-elements/core";

  ${modules
    ?.map((module) => `import ${module.name} from '${module.package}'`)
    .join("\n")}

  const create = (vueApp) => vueApp.use(MjszVbrElementsCore, { modules: [${modules.map(
    (module) => module.name
  )}], apiKey: '${apiKey}'})

  export default create;
`;
