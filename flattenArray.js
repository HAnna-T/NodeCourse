const array = [1, [2, 3, [4, [3, [6]]]], [[5, 6], 7]];

function flatDeep(arr) {
  let limit = arr.length;
  return limit > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, limit - 1) : val),
        []
      )
    : arr.slice();
}
console.log(flatDeep(array));
