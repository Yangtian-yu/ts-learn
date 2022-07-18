interface Todo {
  title: string;
  desc: string;
  done: boolean;
}
type Partital1<T> = {
  [K in keyof T]?: T[K];
};
type partTodo = Partital1<Todo>;
