function union(newArray, oldArray) {
  oldArray.forEach((element) => {
    const index = newArray.findIndex((item) => item === element);
    if (index === -1) {
      newArray.push(element);
    } else {
      newArray.splice(index, 1);
    }
  });
  return newArray;
}

function union1(newArray, oldArray) {
  const array = [...newArray, ...oldArray];
  return array.reduce((pre, cur) => {
    const index = pre.findIndex((item) => item === cur);
    if (index === -1) {
      pre.push(cur);
    } else {
      pre.splice(index, 1);
    }
    return pre;
  }, []);
}

let a = [1, 2, 3, 4, 5];
let b = [5, 6, 7, 8, 9];
// const d = [1, 2, 3].findIndex(1);
// console.log(d);
const c = union1(a, b);
console.log(new Set(a));
console.log(c, "---");
