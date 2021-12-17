interface List {
  readonly id: number;
  name: string;
  // x[string]:any
  age?: number;
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
    // value.id = 1
  });
}
let result = {
  data: [
    { id: 1, name: "a", sex: "male" },
    { id: 2, name: "b", age: 10 },
  ],
};

render(result);

interface StringArray {
  [index: number]: string;
}

let chars: StringArray = ["a", "b"];

interface Names {
  [x: string]: string;
  [z: number]: string;
}
