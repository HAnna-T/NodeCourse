const obj = {
  name: "Jhon",
  age: 50,
  country: {
    name: "Armenia",
    code: 374,
  },
};

function isObject(obj) {
  const type = typeof obj;
  return type === "function" || (type === "object" && !!obj);
}

function inversion(obj) {
  let result = {};
  const entries = Object.entries(obj);
  for (let [key, value] of entries) {
    if (isObject(obj[key])) {
      result[key] = inversion(value);
    } else {
      result[value] = key;
    }
  }
  return result;
}
const invertedObj = inversion(obj);
console.log(invertedObj);
