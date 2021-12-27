Array.prototype.slice = function (start, end) {
  const data = this;
  let newArray = [];
  let stop = data.length - 1;

  if (start === undefined) {
    return newArray;
  }
  if (start < 0) {
    start = start + data.length;
  }
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }

  for (let i = start; i <= stop; i++) {
    newArray.push(data[i]);
  }
  return newArray;
};
