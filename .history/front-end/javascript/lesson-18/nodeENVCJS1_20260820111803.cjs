async function load() {
  const { a } = require("./nodeENVCJS2y.cjs");
  const { default: aJSON } = await import("./a.json", {
    with: { type: "json" },
  });

  console.log(a);
  console.log(aJSON);
}

load();
