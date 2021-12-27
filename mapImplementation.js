Array.prototype.map = function (callback) {
  const data = this;
  let newArray = [];
  for (i = 0; i < data.length; i++) {
    newArray.push({ item: callback(data[i]), index: i, array: data });
  }
  return newArray;
};
