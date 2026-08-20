async function load() {
  const { cjsModule } = await import("./nodeENVCJS2y.cjs");
  const { default: aJSON } = await import("./a.json", {
    with: { type: "json" },
  });

  console.log(cjsModule.a);
  console.log(aJSON);
}

load();
