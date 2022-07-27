let add1: (x: number, y: number) => number;
interface Add {
  (x: number, y: number): number;
}
type Add1 = (x: number, y: number) => number;
let add4: Add = (a, b) => {
  return a + b;
};

interface Lib {
  (): void;
  version: string;
  doSomeThing(): void;
}
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0";
  lib.doSomeThing = () => {};
  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomeThing();

function add5(x: number, y?: number) {
  return y ? x + y : x;
}
add5(1);
function add6(x: number, y: 0, z: number, q = 1) {
  return x + y + z + q;
}
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur);
}
//函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): number;
function add8(...rest: any[]): any {
  let first = rest[0];
  if (typeof first === "string") {
    return rest.join("");
  }
  if (typeof first === "number") {
    return rest.reduce((pre, cur) => pre + cur);
  }
}
