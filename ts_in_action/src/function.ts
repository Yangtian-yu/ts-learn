//函数定义
function add5(x: number, y: number) {
  return x + y;
}

let add6: (x: number, y: number) => number;

type add7 = (x: number, y: number) => number;

interface add8 {
  (x: number, y: number): number;
}

//add5(1, 2,3);
function add9(x: number, y?: number) {
  return y ? x + y : x;
}
add9(1);

function add10(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q;
}
console.log(add10(1, undefined, 3));

function add11(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}

console.log(add11(1, 2, 3, 4, 5));

function add12(...rest: number[]): number;
function add12(...rest: string[]): string;
function add12(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
console.log(add12(1, 2, 3, 4, 5));
console.log(add12("a", "b", "c"));
