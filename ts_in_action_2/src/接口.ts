interface List {
  readonly id: number; //只读属性
  name: string;
  // [x: string]: any; //第三种方式
  age?: number; //可选属性
}
interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
  });
}
let result = {
  data: [
    { id: 1, name: "A" },
    { id: 2, name: "B", sex: "male" },
  ],
};

render(result);
render({
  data: [
    { id: 1, name: "A" },
    { id: 2, name: "B", sex: "male" },
  ],
} as Result);
render(<Result>{
  data: [
    { id: 1, name: "A" },
    { id: 2, name: "B", sex: "male" },
  ],
});
// render({
//   data: [
//     { id: 1, name: "A" },
//     { id: 2, name: "B", sex: "male" },
//   ],
// });

//数字索引接口
interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["1", "1"];
//字符串索引接口
interface Nmae {
  [x: string]: string;
  [z: number]: string;
}
