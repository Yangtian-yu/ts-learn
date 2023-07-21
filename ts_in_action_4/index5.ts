//函数扩展
//函数定义类型和返回值 | 箭头函数定义类型和返回值

function add(x: number, y: number): number {
  return x + y;
}

const add1 = (a: number, b: number): number => a + b;

//函数默认的参数 | 函数可选参数

function add3(x: number = 10, y: number = 20): number {
  return x + y;
}

//参数如何定义一个对象
interface User {
  name: string;
  age: number;
}
function add5(user: User): User {
  return user;
}
//函数this类型
//ts 可以定义this 的类型 在js中无法使用 必须是第一个参数定义this的类型
interface Obj {
  user: number[];
  add: (this: Obj, num: number) => void;
}

let obj = {
  user: [1, 2, 3],
  add(this: Obj, num: number) {
    this.user.push(num);
  },
};

obj.add(4);

//函数重载
let user: number[] = [1, 2, 3];
function findNum(ids: number[]): number[]; // 如果传的是一个number类型的数组那就做添加
function findNum(id: number): number; // 如果传的是一个number类型的数字那就做查找
function findNum(): number[]; // 如果不传参数那就做返回
function findNum(ids?: number | number[]): number | number[] {
  if (typeof ids === "number") {
    return user.find((item) => item === ids);
  } else if (Array.isArray(ids)) {
    return user.concat(ids);
  } else {
    return user;
  }
}
