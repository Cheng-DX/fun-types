/**
 * Get all keys of T that have U as value type
 */
export type UTypeKeys<T, U> = {
  [P in keyof T]-?: U extends T[P] ? P : never
}[keyof T]

type UndefinedKeys<T> = UTypeKeys<T, undefined>

interface A {
  a?: string
  b: undefined
  c: null
}
// type T = "a"
type T = UTypeKeys<A, string>

// type N = "a" | "b"
type N = UndefinedKeys<A>
