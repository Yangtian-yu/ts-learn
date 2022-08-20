export type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
//keyof array——>索引
type r = TupleToObject<typeof tuple>;

//js
function TupleToObject(array) {
  //1.array 里面的key 是不是 string 类型 或者是不是number 或者是不是symbol
  //error
  const obj = {};
  array.forEach((element) => {
    obj[element] = element;
  });
  return obj;
}

// 1.返回一个对象
//2.遍历array T[number]
