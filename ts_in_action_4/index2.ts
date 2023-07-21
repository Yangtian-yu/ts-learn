// any 任意类型 unknown 不知道的类型
//1.top type 顶级类型 any unknown
//2.object
//3. Number String Boolean
//4.number string boolean
//5.1  "dd"   false
//6. never
// unknown 只能赋值给自身或者是any
//unknown 没有办法读取任何属性， 方法也不可以调用
//unknown  比 any更加安全

interface X {
  name: string;
}

let arr: X[] = [{ name: "11" }];
let arr1: Array<X> = [{ name: "-" }];

//二维数组
let arr3: number[][] = [[3], [3], [3]];
let arr4: Array<Array<number>> = [[3], [3], [3]];
let arr5: any[] = [1, "--"];

function zz(...args: number[]) {
  console.log(args);
  console.log(arguments);
  let a: IArguments = arguments;
}
zz(1, 2, 3);
