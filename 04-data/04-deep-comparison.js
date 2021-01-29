/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.

// Your code here.

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
*/

function deepEqual(x, y) {
  if (Object.keys(x).join("") === Object.keys(y).join("")) {
    let result = [];
    let flag = false;

    for (key of Object.keys(x)) {
      //flag = ((typeof x[key]) === "object") ? deepEqual(x[key], y[key]) : ( (x[key] === y[key]) ? true : false )
      if (typeof x[key] === "object") {
        flag = deepEqual(x[key], y[key]);
      } else if (x[key] === y[key]) {
        flag = true;
      } else {
        flag = false;
      }
      result.push(flag);
    }
    return result.includes(false) ? false : true;
  } else {
    return false;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
