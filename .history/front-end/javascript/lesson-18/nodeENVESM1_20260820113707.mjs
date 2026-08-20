const a = 1;

function add() {}

// export default { a, add };

export { a, add };

export let count = 0;
export function fun() {
  count++;
  return count;
}
