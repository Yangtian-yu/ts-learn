function log<T>(value: T): T {
  console.log(value);
  return value;
}
log<string[]>(["a", "b"]);
log(["a", "b"]);
interface Log1<T = string> {
  (value: T): T;
}
let mylog: Log1 = log;
mylog("a");
mylog("a");

class Log<T> {
  run(value: T) {
    console.log(value);
    return value;
  }
}

let log1 = new Log<number>();
log1.run(1);
let log2 = new Log();
log2.run(1);

interface Length {
  length: number;
}

function log3<T extends Length>(value: T): T {
  console.log(value, value.length);
  return value;
}
log3([]);
log3("a");
log3({ length: 1 });
export {};
