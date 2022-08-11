let obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}
let a5 = getValues(obj2, ["a"]);

//keyof T
interface Obj {
  a: number;
  b: string;
}
let key: keyof Obj;
key = "a";
//T[K]
let value: Obj["a"];
value = 1;

//T extends U
