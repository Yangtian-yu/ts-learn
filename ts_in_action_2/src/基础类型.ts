//原始类型
let bool: boolean = true;
let num: number = 1;
let str: string = "1";
//数组
let arr1: number[] = [1, 2, 3, 4];
let arr2: Array<number> = [1, 2, 34];
let arr3: Array<number | string> = [1, 2, 34, "999"];
let arr4: Array<{ [propName: string]: string | number }> = [{ a: "1", b: 1 }];
//元组
let tuple: [number, string] = [0, "1"];
tuple.push(2);
console.log(tuple);
// tuple[2];
//函数
let add = (x: number, y: number): number => x + y;
let computed: (x: number, y: number) => number;
computed = (x, y) => x + y;
//对象
let obj1: { [propName: string]: number }; //以后会添加类型 key为string类型 value  为 number类型
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;
//symbol
let s1: symbol = Symbol();
let s2 = Symbol();
//undefined null
let nu: undefined = undefined;
let un: null = null;

//viod
let noReturn = () => {};

//any
let x;

//never
let error = () => {
  throw new Error("error");
};
