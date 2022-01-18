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
