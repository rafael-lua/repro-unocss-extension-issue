export type Mutable<T> = {
  -readonly [P in keyof T]: Mutable<T[P]>;
};

export const toMutable = <T>(v: T): Mutable<T> => v;
