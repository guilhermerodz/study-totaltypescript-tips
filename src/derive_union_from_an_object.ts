import type { Expect, Equal } from './helpers/type-utils'

const fruitCounts = {
  apple: 1,
  pear: 4,
  banana: 26,
}

type FruitCounts = typeof fruitCounts
type NewSingleFruitCount = {
  [K in keyof FruitCounts]: { [K2 in K]: FruitCounts[K2] }
}[keyof FruitCounts]

const singleFruitCount: NewSingleFruitCount = {
  apple: 2,
}

type tests = [
  Expect<
    Equal<
      NewSingleFruitCount,
      | {
          apple: number
        }
      | {
          pear: number
        }
      | {
          banana: number
        }
    >
  >,
]
