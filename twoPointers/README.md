## How two pointers works

### The big promise

Instead of trying every pair/triple (O(n²), O(n³)), you move pointers so that **each element is visited a small constant number of times**, usually once, giving **O(n)** or **O(n log n)** (if sorting is needed).

### Why it’s legal

Two pointers works when you can make moves that are **provably safe**. “Safe” means: when you move a pointer, you are not skipping any valid answers.

That safety usually comes from one of these properties:

1. **Sorted data** (or you can sort it)

- If the array is sorted and your current sum is too big, moving the right pointer left can only reduce the sum.
- If it’s too small, moving the left pointer right can only increase it.

1. **Monotonic constraint**

- Something only improves or only worsens as you move one pointer.
- Example: shrinking a window decreases sum; expanding increases it (when numbers are non-negative), etc.

1. **Partition invariants**

- You’re maintaining “everything left of `slow` is good; everything between `slow` and `fast` is undecided; everything beyond `fast` is unprocessed.”

---

## Two main flavors

### 1) Converging pointers (opposite ends)

**Use when**: the array is sorted (or sorted by some key), and you’re trying to find pairs or optimize something based on extremes.

Common jobs:

- Two Sum in sorted array
- Closest pair / target pair
- Container with most water
- Palindrome check (compare ends)

Mental move:

- Start wide: `left = 0`, `right = n-1`
- Compute something (often sum)
- If result too large, move `right--`
- If too small, move `left++`
- Repeat until they meet

Why it’s efficient: each pointer only moves inward, max `n` moves each.

---

### 2) Same-direction pointers (fast/slow)

**Use when**: you need to “filter”, “compress”, “dedupe”, “partition”, or manage a sliding region.

Common jobs:

- Remove duplicates in-place
- Move zeros to end
- Partition by predicate (keep odds first, etc.)
- Sliding window variants (fast expands, slow shrinks)

Mental move:

- `fast` scans every element
- `slow` marks where the next “kept” element should go
- When `fast` finds something you keep, write it at `slow` and `slow++`

Why it’s efficient: `fast` does one pass; `slow` only moves forward.

---

## How to recognize “this is a two pointers problem”

Look for these tells in the prompt:

### Strong signals (green lights)

- “sorted array” is literally written (free win)
- “find a pair/triple” with sum/condition
- “subarray/substring” with “at most / at least / exactly” constraints (often sliding window, a cousin of two pointers)
- “remove/modify in place” and keep relative order (fast/slow)
- “palindrome” or “compare from both ends”
- “maximize/minimize” with two ends meaningful (like container area)

### Medium signals (yellow lights)

- Array not sorted, but you could sort without breaking the problem (and returning values, not original indices).
If you need original indices, you can still sort but you’ll need to carry indices or use a hashmap instead.

### Red flags (two pointers likely wrong)

- Unsorted array and you need “two sum” indices fast: hashmap is usually better.
- Subarray sums with negative numbers: sliding window/two pointers often breaks (prefix sum + hashmap is the fix).
- No monotonicity: moving pointers can skip valid solutions.

A quick test:

> If I move one pointer, does the “score” change in a predictable direction?

If yes, two pointers has a home here.

---

## Common pitfalls

- **Forgetting the invariant** (why a move is safe). If you can’t explain “why I can move left/right”, you’re guessing.
- **Off-by-one in loops** (`left < right` vs `left <= right`)
- **Duplicates handling** (3Sum, unique pairs, etc.)
- **Sorting destroys indices** (if indices matter, track them)
- **Sliding window with negatives** (don’t do it)

