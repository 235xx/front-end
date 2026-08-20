let a = 1;

const count = 0;

function addFun() {
  return addFun++;
}

function getCount() {
  return count;
}

module.exports = { a, count, addFun };
