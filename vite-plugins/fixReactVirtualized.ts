import fs from "node:fs/promises";
import path from "node:path";
import url from "node:url";
import { createRequire } from "node:module";
import { PluginOption } from "vite";

/**
 * Please remove this plugin when issue is fixed
 * https://github.com/bvaughn/react-virtualized/issues/1632
 */
export function fixReactVirtualized(): PluginOption {
  const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;
  return {
    name: "flat:react-virtualized",
    // Note: we cannot use the `transform` hook here
    //       because libraries are pre-bundled in vite directly,
    //       plugins aren't able to hack that step currently.
    //       so instead we manually edit the file in node_modules.
    //       all we need is to find the timing before pre-bundling.
    configResolved: async () => {
      const require = createRequire(import.meta.url);
      const reactVirtualizedPath = require.resolve("react-virtualized");
      const { pathname: reactVirtualizedFilePath } = new url.URL(
        reactVirtualizedPath,
        import.meta.url,
      );
      const file = reactVirtualizedFilePath.replace(
        path.join("dist", "commonjs", "index.js"),
        path.join("dist", "es", "WindowScroller", "utils", "onScroll.js"),
      );
      const code = await fs.readFile(file, "utf-8");
      const modified = code.replace(WRONG_CODE, "");
      await fs.writeFile(file, modified);
    },
  };
}
