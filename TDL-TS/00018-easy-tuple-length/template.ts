export type Length<T extends readonly any[]> = T["length"];

//js
function getLength(arr) {
  return arr.length;
}

//知识点
//什么是 tuple类型
//tuple 和 普通的数组有什么区别
