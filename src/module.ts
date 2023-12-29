// import { readFile } from "fs/promises";
import {
  defineNuxtModule,
  createResolver,
  addPlugin,
  addTemplate,
} from "@nuxt/kit";
// import * as core from "@mjsz-vbr-elements/core";
// import defu from "defu";
// import { findExportNames } from "mlly";
import { readPackageJSON } from "pkg-types";

// Module options TypeScript interface definition
export interface ModuleOptions {
  apiKey: string;
  // modules: Record<string, any>[];
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
    console.log("options:", options);
    // options.modules[0]?.register();
    // options.modules = [...new Set(options.modules)];

    // for (const name in core) {
    //   console.log(name);
    //   addImports({
    //     from: "@mjsz-vbr-elements/core",
    //     name,
    //   });
    // }

    const pkg = await readPackageJSON(nuxt.options.rootDir);
    const coreDeps = Object.keys({
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }).filter((d) => d.startsWith("@mjsz-vbr-elements/"));

    // console.log({ coreDeps });

    const modules = [];

    for (const mod of new Set([...coreDeps])) {
      if (
        mod === "@mjsz-vbr-elements/core" ||
        mod === "@mjsz-vbr-elements/nuxt"
      )
        continue;
      // const entry = await resolvePath(mod);
      // if (entry === mod) continue;

      // const imports = findExportNames(await readFile(entry, "utf8"));

      // for (const name of imports) {
      //   if (name.includes("CE") || name.match(/^[a-z]/)) continue;
      //   console.log(name, mod);
      //   addComponent({
      //     name,
      //     filePath: mod,
      //     export: name,
      //     mode: "client",
      //   });
      // }
      const name = mod.split("/")[1];
      modules.push({ name, package: mod });
    }

    nuxt.options.vue.compilerOptions.isCustomElement = (tag) =>
      tag.startsWith("mjsz-vbr-");

    // nuxt.options.runtimeConfig.public.mjsz = defu(
    //   nuxt.options.runtimeConfig.public.mjsz as Required<ModuleOptions>,
    //   options
    // );

    addTemplate({
      filename: "mjszVbrElements.imports.mjs",
      getContents: () => generateImports(options, modules),
      write: true,
    });

    addPlugin({ src: resolve("./runtime/plugin"), mode: "client" });
  },
});

const generateImports = ({ apiKey }: ModuleOptions, modules) => `
  import { createConfig } from "@mjsz-vbr-elements/core";

  ${modules
    ?.map(
      (module) => `import ${module.name} from '${module.package}'`
    )
    .join("\n")}

  const create = () => createConfig({ modules: [${modules.map((module)=> module.name)}], apiKey: '${apiKey}'})

  export default create;
`;
