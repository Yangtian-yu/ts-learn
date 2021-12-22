let abd = (x = 1) => x + "2";

function proxy() {
  const p = new Promise(() => {});
}

// x 兼容 y ： x （目标类型） = y （源类型）

let s: string = "a";

//接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let x: X = { a: 1, b: 2 };
let y: Y = { a: 1, b: 2, c: 3 };

x = y;
//函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
  return handler;
}
//函数兼容
//1.参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2)
//可选参数和剩余参数
let a = (p1: number, p2: number) => {};
let b = (p1?: number, p2?: number) => {};
let c = (...args: number[]) => {};

a = b;
a = c;
// b= c
c = a;
c = b;

//2.参数类型
let handler3 = (a: string) => {};
// hof(handler3)

interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {};
let p2d = (point: Point2D) => {};
p3d = p2d;
// p2d = p3d

//3.返回值类型
let f = () => {
  return {
    name: "alice",
  };
};
let g = () => {
  return {
    name: "alice",
    location: "beijing",
  };
};
f = g;

function overload(a: number, b: number): number;
function overload(a: string, b: string): string;
function overload(a: any, b: any): any {}

//枚举兼容性
enum Fruit {
  Apple,
  Banana,
}
enum Color {
  Red,
  Yellow,
}

let fruit: Fruit.Apple = 3;
let no: number = Fruit.Apple;
// let color:Color = Fruit.Apple

//类兼容性
class A {
  constructor(p: number, q: number) {}
  id: Number = 1;
}

class B {
  static s = 1;
  constructor(p: number) {}
  id: number = 2;
}
let aa = new A(1, 2);
let bb = new B(1);
// aa = bb;
// bb=aa

class H extends A {}
let hh = new H(1, 2);
aa == hh;
hh = aa;

//泛型兼容性
interface Empty<T> {
  value: T;
}
// let obj1: Empty<number> = {  };
// let obj2: Empty<string> = {  };
// obj1 = obj2;

let log4 = <T>(x: T): T => {
  console.log("x");
  return x;
};
let log5 = <U>(Y: U): U => {
  console.log("Y");
  return Y;
};
log4 = log5;

// 结构之间兼容：成员少的兼容成员多的

// 函数之间兼容：参数多的兼容参数少的

enum Type {
  Strong,
  Week,
}
class java {
  helloJava() {
    console.log("hello java");
  }
  java: any;
}

class javaScript {
  helloJavaScript() {
    console.log("hello javaScript");
  }
  javaScript: any;
}

function isJava(lang: java | javaScript): lang is java {
  return (lang as java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new java() : new javaScript();
  // if ((lang as java).helloJava) {
  //   (lang as java).helloJava();
  // } else {
  //   (lang as javaScript).helloJavaScript();
  // }
  //instanceof
  if (lang instanceof java) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  //in
  if ("java" in lang) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }

  //typeof
  if (typeof x === "string") {
    x.length;
  } else {
    x.toFixed(2);
  }

  //函数判断
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.helloJavaScript();
  }
  return lang;
}
getLanguage(Type.Strong, 2);

export {};
