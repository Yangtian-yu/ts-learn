import { Equal, Expect } from "@type-challenges/utils";
import { TupleToObject } from "./template";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type r = typeof tuple;
// tuple[0] = "111"; // as const
let a: r = ["tesla", "model 3", "model X", "model Y"];

//1.字面量类型
let str = "123";
type s = typeof str;
str = "11111"; //可修改

const strConst = "3213213"; //常量
type str = typeof strConst;
// let b: str = "99999"; //不可修改

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

//const let js 世界
//type interface type 世界
//1.typeof
//2.字面量类型 as const
