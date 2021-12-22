interface DogInterface {
  run(): void;
}
interface CatInteface {
  jump(): void;
}
let pet: DogInterface & CatInteface = {
  run() {},
  jump() {},
};

let aaa: number | string = 1;
let bbb: "a" | "b" | "c";
let ccc: 1 | 2 | 3;

class Dog1 implements DogInterface {
  run() {}
  eat() {}
}
class Cat1 implements CatInteface {
  jump(): void {}
  eat() {}
}
enum Master {
  Boy,
  Girl,
}

function getPet(master: Master) {
  let pet = master === Master.Boy ? new Dog1() : new Cat1();
  pet.eat();
  return pet;
}

interface Square {
  kind: "sqyare";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "cirlce";
  r: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape) {
  switch (s.kind) {
    case "sqyare":
      return s.size * s.size;
    case "rectangle":
      return s.height * s.width;
    case "cirlce":
      return Math.PI * s.r;
    default:
      return ((e: never) => {
        throw new Error(e);
      })(s);
  }
}
export {};
