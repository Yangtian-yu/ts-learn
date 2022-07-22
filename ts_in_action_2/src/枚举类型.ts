//数字枚举
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

//字符串枚举
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了",
}

//枚举成员
enum Char {
  a,
  b,
  c = 1 + 3,
  d = Math.random(),
  e = "123".length,
}

//常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
