let s: string = "a";
//接口兼容
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x1: X = { a: 1, b: 1 };
let y1: Y = { a: 1, b: 1, c: 1 };
x1 = y1;

//函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}

//1）参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)  个数不兼容

//可选参数和剩余参数
let a1 = (p1: number, p2: number) => {};
let b1 = (p1?: number, p2?: number) => {};
let c1 = (...arg: number[]) => {};
a1 = b1;
a1 = c1;
// b1 = c1;
// b1 = a1;
c1 = a1;
c1 = b1;

//2)参数类型
let handler3 = (a: string) => {};
// hof(handler3)
interface Poinst3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Poinst3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d;

//3)返回值类型
let f = () => ({ name: "alice" });
let g = () => ({ name: "alice", location: "beijing" });
f = g;
// g = f;

//类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1;
  private name: string = "";
}
class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
  private name: string = "";
}
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb;
// bb = aa;
class C extends A {}
let cc = new C(1, 2);
aa = cc;
cc = aa;
//泛型兼容性
interface Empty<T> {
  value: T;
}
// let obj2: Empty<number> = {};
// let obj3: Empty<string> = {};
// obj2 = obj3;
let log4 = <T>(x: T): T => {
  return x;
};
let log5 = <U>(y: U): U => {
  return y;
};
log4 = log5;
