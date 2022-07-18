let courseName: string = "玩转Vue 3全家桶";
let price: number = 129;
let isOnlinr: boolean = true;
let courseAales: undefined;
let timer: null = null;
let me: [String, number] = ["大圣", 18];
me[0] = "1";

let couresl: String | number = "玩转";
couresl = 1;
couresl = 2;
type courseScore = "好" | "非常好" | "嘎嘎好";
let coures2: courseScore = "好";

interface jiketime {
  name: string;
  price: number[];
  children?: string[];
  teacher?: string | boolean;
  readonly address: string;
}

let vueCourse: jiketime = {
  name: "wanzhuang",
  price: [95],
  teacher: false,
  address: "jiketime",
};

function add110(x: number, y: number): number {
  return x + y;
}
add110(1, 2);

let add;
