interface Identities<V, M> {
  value: V;
  message: M;
}

function indentiy<T, U>(value: T, message: U): Identities<T, U> {
  return {
    value,
    message,
  };
}

indentiy({ age: 18 }, "1");

interface Person {
  name: string;
  age: number;
  loaction: string;
}

type K1 = keyof Person;
type K2 = keyof Person[];
type K3 = keyof { [x: string]: Person };

enum Difficulty {
  Easy,
  inermediate,
  hard,
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

let tsInfo = {
  name: "Typescript",
  superseOf: "javascript",
  defficulty: Difficulty.inermediate,
};

let difficulty: Difficulty = getProperty(tsInfo, "defficulty");
