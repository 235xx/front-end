let a = 1;

const count = 0;

function addFun() {
  return addFun++;
}

function getCount() {
  return count;
}

let state = {
  count: 0,
};

module.exports = { a, count, addFun };
