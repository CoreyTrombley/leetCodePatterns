# Problem: “Signal Stability”

You are given an array of daily server load deltas.

Positive numbers = load increase
Negative numbers = load decrease

```ts
const deltas = [3, -2, 5, -1, 2, -4, 6]
```

You are also given a list of queries.

Each query asks:

> What is the total load change between index `l` and `r` (inclusive)?

---

## Input

```ts
deltas: number[]
queries: number[][]
```

Each query is:

```ts
[l, r]
```

With:

```
0 <= l <= r < deltas.length
```

---

## Example

```ts
deltas = [3, -2, 5, -1, 2, -4, 6]

queries = [
  [0, 2],   // 3 + (-2) + 5 = 6
  [1, 4],   // -2 + 5 + (-1) + 2 = 4
  [3, 6],   // -1 + 2 + (-4) + 6 = 3
  [2, 2]    // 5
]
```

Expected output:

```ts
[6, 4, 3, 5]
```

---

## Requirements

1. Preprocess once.
2. Each query must run in **O(1)**.
3. Total solution complexity should be:

   * O(n) preprocessing
   * O(q) for queries

---

## Function Signature

```ts
function rangeSums(deltas: number[], queries: number[][]): number[]
```

---

## Edge Cases To Think About

* l = 0
* l = r
* all negative numbers
* very large input size

---

### Extra Challenge (optional)

Add another function:

```ts
function countZeroSumSubarrays(deltas: number[]): number
```

Return how many contiguous subarrays sum to zero.

That one is prefix sums + hashmap.
