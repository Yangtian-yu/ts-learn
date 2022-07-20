import "./dateType";
let hello: string = "hello world";
document.querySelectorAll(".app")[0].innerHTML = hello;
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let MySearch: SearchFunc;
MySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
};
