abstract class Animal {
  eat() {
    console.log("eat");
  }
  abstract sleep(): void;
}
// let animal = new Animal()

class Cat extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {}
  sleep(): void {
    console.log("Cat sleep");
  }
}
let cat = new Cat("mimi");
cat.eat();
class Fish extends Animal {
  sleep(): void {
    console.log("fish sleep");
  }
}
let fish = new Fish();
let animals: Animal[] = [cat, fish];
animals.forEach((i) => {
  i.sleep();
});

class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
  next() {
    return this;
  }
}

new MyFlow().next().step1().next().step2();
