// declare function pick(target: any, ...keys: any): any;

// declare function pick(
//   target: Record<string, unknown>,
//   ...keys: string[]
// ): unknown;

// declare function pick<T extends Record<string, unknown>>(
//   target: T,
//   ...keys: (keyof T)[]
// ): unknown;

// declare function pick<T extends Record<string, unknown>, Keys extends keyof T>(
//   target: T,
//   ...keys: Keys[]
// ): {
//   [K in Keys]: T[K];
// };
// pick({ a: "" }, "a", "a");

export type L2T<L, LAlias = L, LAlias2 = L> = [L] extends [never]
  ? []
  : L extends infer LItem
  ? [LItem?, ...L2T<Exclude<LAlias2, LItem>, LAlias>]
  : never;

declare function pick<
  T extends Record<string, unknown>,
  Keys extends L2T<keyof T>
>(target: T, ...keys: Keys): Pick<T, Keys[number] & keyof T>;

pick({ a: "", b: 1 }, "a");
