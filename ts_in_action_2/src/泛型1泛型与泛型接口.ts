function log(value: any): any {
  return value;
}
function log1<T>(value: T): T {
  return value;
}
log1<string[]>(["1", "2"]);
log(["1"]);
// type Log = <T>(value: T) => T;
// let myLog: Log = log;
interface Log<T = string> {
  <T>(value: T): T;
}

let myLog: Log = log;
