//ts 联合类型 union
export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//js
//对比学习法
function myPick(todo, keys) {
  const obj = {};

  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}
//1.返回一个对象
//2.遍历 foreach
//- https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
//3.todo[key]取值 indexed
// - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html?#handbook-content
//4.看看key在不在todo里面
//1. keyof  lookup
//- https://www.typescriptlang.org/docs/handbook/2/keyof-types.html#the-keyof-type-operator
//exends
//- https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
