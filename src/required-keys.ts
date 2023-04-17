/**
 * Let keys K of T be required
 */
export type RequiredByKeys<T, K extends keyof T> = {
  [P in K]-?: T[P]
} & {
  [P in Exclude<keyof T, K>]: T[P]
}

interface A {
  a?: string
  b?: number
  c?: null
}
/**
 * type TEST = {
 *  a: string
 *  b: number
 *  c?: null
 * }
 */
type TEST = RequiredByKeys<A, 'a' | 'b'>
