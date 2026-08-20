import { obj } from "./nodeENVCJS1.cjs";

async function load() {
  const { a } = await import("./nodeENVESM1.mjs");
  const { default: bJSON } = await import("./b.json", {
    with: { type: "json" },
  });

  console.log(a);
  console.log(bJSON);
}

load();

// export default const a 不支持
