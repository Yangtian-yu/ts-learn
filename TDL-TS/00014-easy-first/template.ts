// export type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// export type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// export type First<T extends any[]> = T extends [] ? never : T[0];
export type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

//T[number]

type ages = [1, 2, 3];
//union
type t1 = ages[number];

//看看 某个值是不是在unio n里面
// 1 extends 1    1 extends 2  1 extends 3
type t2 = 1 extends ages[number] ? "true" : false;

//js
const first = (arr) => {
  const [first, ...rest] = arr;

  //arr 是不是一个空数组 如果是的话 ，那么返回never
  return first ? first : "never";
  // return arr[0];
};

//知识点
//1.extends 类型条件判断
//2.获取tuple的length 属性
//3.extends union 判断的规则
//4. infer 的使用(推断)
