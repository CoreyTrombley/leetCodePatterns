## Problem: “Heatmap Queries” (2D Prefix Sum)

You’re building analytics for a streaming app. You have a grid where each cell represents the number of plays recorded for a given **day** and **region**.

* Rows = days (0..R-1)
* Cols = regions (0..C-1)
* `plays[r][c]` = number of plays on day `r` in region `c`

You will be asked multiple queries of the form:

> “How many total plays happened inside the rectangle from (r1, c1) to (r2, c2), inclusive?”

Return the answer for each query.

### Input

* `plays`: a 2D array of integers, size `R x C`, where `0 <= plays[r][c] <= 10^6`
* `queries`: an array of queries, each query is `[r1, c1, r2, c2]`

  * Constraints: `0 <= r1 <= r2 < R`, `0 <= c1 <= c2 < C`

### Output

Return an array `answers` where `answers[i]` is the sum of `plays[r][c]` for all `r1 <= r <= r2` and `c1 <= c <= c2`.

### Requirements

* Preprocess once, then answer each query fast.
* Target: **O(R*C)** preprocessing and **O(1)** per query.

### Example

```txt
plays =
[
  [2, 1, 3, 0],
  [4, 0, 1, 2],
  [1, 5, 0, 1]
]

queries =
[
  [0, 0, 1, 2],  // rows 0..1, cols 0..2  => (2+1+3) + (4+0+1) = 11
  [1, 1, 2, 3],  // => (0+1+2) + (5+0+1) = 9
  [0, 3, 2, 3]   // last column only => 0 + 2 + 1 = 3
]

answers = [11, 9, 3]
```

### Notes / Edge Cases to Handle

* Single-cell rectangles (r1=r2 and c1=c2)
* Whole-grid query
* Queries that start at row 0 or col 0 (classic off-by-one traps)

### What to implement (TypeScript)

Write:

```ts
function rectangleSums(plays: number[][], queries: number[][]): number[];
```

If you want an extra spicy add-on 🌶️:

* Add a second function `update(r, c, delta)` and support interleaved updates + queries (that becomes a 2D BIT/Fenwick or segment tree problem). But the base problem above is pure prefix-sum territory.