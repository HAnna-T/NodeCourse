Array.prototype.map = function (callback) {
  const data = this;
  let newArray = [];
  for (i = 0; i < data.length; i++) {
    newArray.push(callback(data[i], i, data));
  }
  return newArray;
};
