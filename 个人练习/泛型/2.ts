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

let add1: (a: number, b: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
interface addType1 {
  (a: number, b: number): number;
}
let add3: addType1 = function (x: number, y: number): number {
  return x + y;
};
add3(1, 2);

function identity<T>(arg: T): T {
  return arg;
}
identity<string>("asd");

interface VueCourse5 {
  name: string;
  prisce: number;
}
type CourseProps = keyof VueCourse5;
let k: CourseProps = "name";
let k1: CourseProps = "prisce";

type ExtendsType<T> = T extends boolean ? "重学前端" : "玩转vue25";
type ExtendsType1 = ExtendsType<boolean>;
let a: ExtendsType1 = "重学前端";
type ExtendsType2 = ExtendsType<string>;
type Courses = "玩转全家桶" | "重学前端";
type CourseObj = {
  [k in Courses]: number;
};
let b: CourseObj = {
  玩转全家桶: 1,
  重学前端: 2,
};

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}
const coursePrice: CourseObj = {
  玩转全家桶: 127,
  重学前端: 2,
};
getProperty(coursePrice, "玩转全家桶");
type Foo = () => CourseObj;
type ReturnType1<T> = T extends () => infer P ? P : never;
type Foo1 = ReturnType1<Foo>;
