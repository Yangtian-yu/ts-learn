//类型断言 | 联合类型 | 交叉类型

//联合类型
let a: number | string = 1;

let fn = function (type: number | boolean): boolean {
  return !!type;
};

export {};

//交叉类型
interface People {
  namne: string;
  age?: number;
}

interface Man {
  sex: number;
}

const xiaoman = (man: People & Man): void => {
  console.log(man);
};

xiaoman({
  namne: "xiaoman",
  age: 18,
  sex: 1,
});

// 类型断言
let fn1 = function (num: number | string): void {
  console.log((num as string).length);
};

fn1("123");
fn1(123);

interface A {
  run: string;
}

interface B {
  build: string;
}

let fn2 = (type: A | B): void => {
  console.log((type as A).run);
};

(window as any).a = 5;

export {};
