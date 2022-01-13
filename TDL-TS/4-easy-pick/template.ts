//ts 联合类型 union

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//js
//对比学习法
function myTick(todo, keys) {
  const obj = {};
  keys.forEach((element) => {
    if (element in todo) {
      obj[element] = todo[element];
    }
  });

  return obj;
}

//返回一个对象
//遍历 foreach
//todo[key]取值
//看看key在不在todo里面
