enum Type {
  Strong,
  Week,
}
class Java {
  helloJava() {
    console.log("hello java");
  }
  java: any;
}

class javaScript {
  helloJavaScript() {
    console.log("hello JavaScript");
  }
  javascript: any;
}

function isJava(lang: Java | javaScript): lang is Java {
  return (lang as Java).helloJava !== undefined;
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new javaScript();
  //instanceof
  // if (lang instanceof Java) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }
  //in
  // if ("java" in lang) {
  //   lang.helloJava();
  // } else {
  //   lang.helloJavaScript();
  // }
  //typeof
  // if(typeof x === "string"){
  //   x.length
  // }else {
  //   x.toFixed(2)
  // }
  //function
  if (isJava(lang)) {
    lang.helloJava();
  } else {
    lang.javascript();
  }
  return lang;
}

getLanguage(Type.Strong, 1);
