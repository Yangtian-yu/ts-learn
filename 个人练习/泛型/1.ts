let courseName: string = "玩转vue 3全家桶";
let price: number = 129;
let isOnline: boolean = true;
let courseSales: undefined;
let timer: null = null;
let me: [string, number] = ["dasheng", 18];
me[0] = "";
let anyThing: any;
let anCourse: any = 1;
type courseScore = "好" | "非常好" | "嘎嘎好";
let score1: courseScore = "好";
function add(x: number, y: number): number {
  return x + y;
}

let add1: (a: number, b: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

type addType = (a: number, b: number) => number;
let add2: addType = function (x, y) {
  return x + y;
};
interface addType1 {
  (a: number, b: number): number;
}
let add3: addType1 = (x, y) => {
  return x + y;
};

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

let w: Window = window;
let ele: HTMLElement = document.createElement("div");
let allDiv: NodeList = document.querySelectorAll("div");
ele.addEventListener(
  "click",
  function (e: MouseEvent) {
    const args: IArguments = arguments;
    w.alert(1);
    console.log(args);
  },
  false
);
function identity<T>(arg: T): T {
  return arg;
}
identity<string>("wanzhuan");
identity<number>(1);
interface VueCourse5 {
  name: string;
  price: number;
}
type CourseProps = keyof VueCourse5; //只能是name和price选一个

let k: CourseProps = "name";
let k1: CourseProps = "price";

type extendsType<T> = T extends boolean ? "重学前端" : "玩转Vue3";

type extendsType1 = extendsType<boolean>;

type extendsType2 = extendsType<string>;

type Courses = "玩转vue 3 " | "重学前端";
type CourseObje = {
  [K in Courses]: number;
};

// K extends keyof T 限制K的类型必须是T的属性之一
//T【K】是值的类型
function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name];
}

const coursePrice: CourseObje = {
  "玩转vue 3 ": 123,
  重学前端: 1,
};
getProperty(coursePrice, "玩转vue 3 ");

type Foo = () => CourseObje;
//如果T是一个函数，并且函数返回类型是P就返回P
type ReturnType1<T> = T extends () => infer P ? P : never;
type Foo1 = ReturnType1<Foo>;

interface Todo {
  title: string;
  decs: string;
  done: boolean;
}

type Partial1<T> = {
  [K in keyof T]?: T[K];
};

type partTodo = Partial1<Todo>;
