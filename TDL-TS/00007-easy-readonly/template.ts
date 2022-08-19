export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

//对比学习法
function readonly(obj) {
  const ressult = {};
  for (const key in obj) {
    ressult["readonly" + key] = obj[key];
  }
  return ressult;
}

//1. 返回一个对象
//2.遍历 obj （js 对象 ts 接口） in -》 mapped  keyof -> lookup
//3.加上readonly 关键字
//4.通过key 来获取 obj（接口） 里面的值  indexed
