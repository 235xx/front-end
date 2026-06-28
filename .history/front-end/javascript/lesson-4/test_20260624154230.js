
function make() {
  let n = 0;
  return () => ++n;
}
const c1 = make();
const c2 = make();

c1()
c1()
c1()