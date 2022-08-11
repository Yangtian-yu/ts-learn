export type TupleToObject<T extends readonly (string | symbol | number)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
//keyof array——>索引
type r = TupleToObject<typeof tuple>;

//js
function TupleToObject(array) {
  const obj = {};

  return obj;
}

// 1.返回一个对象
//2.遍历array T[number]
