async function load() {
  const { default: cjsModule } = await import("./nodeENVCJS2y.cjs");
  const { default: aJSON } = await import("./a.json");

  console.log(cjsModule.a);
  console.log(aJSON);
}

load();
