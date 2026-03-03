# LeetCode Patterns

A structured collection of coding patterns with problems and solutions. Each pattern has a conceptual guide and concrete implementations so you can recognize when to use it and how to code it.

---

## Patterns

### [Two Pointers](twoPointers/README.md)

Use one or two pointers that move through the array so each element is visited a small, constant number of times—often **O(n)** instead of brute-force O(n²) or O(n³). Works when moves are *provably safe*: sorted data, monotonic constraints, or partition invariants.

**Problems:**

| Problem | Description |
|--------|-------------|
| [Valid Palindrome / Longest Palindromic Substring](twoPointers/validPalindrome/) | Find the span of the longest palindromic substring (converging pointers + expansion). |
| [Remove Duplicates from Sorted Array](twoPointers/removeDupes/) | In-place dedupe with O(1) space using fast/slow pointers. |
| [Move Zeros](twoPointers/moveZeros/) | Move all zeros to the end in-place, preserving relative order (fast/slow). |

---

### [Prefix Sum](prefixSum/README.md)

Store “total so far” at each position. Range sums become a single subtraction: `sum(l..r) = prefix[r+1] - prefix[l]`. You pay O(n) (or O(R×C) in 2D) once, then answer each range query in O(1).

**Problems:**

| Problem | Description |
|--------|-------------|
| [Count Subarrays With Sum = K](prefixSum/countSubarrays/) | Count contiguous subarrays whose sum equals `k` (prefix sum + frequency map). |
| [Heatmap Queries](prefixSum/heatmapQueries/) | 2D prefix sum: answer many rectangle-sum queries on a grid in O(1) per query. |
| [Signal Stability](prefixSum/signalStability/) | Answer range-sum queries on an array of load deltas (1D prefix sum). |

---

## Repo layout

- **`<pattern>/README.md`** — When the pattern applies, main ideas, and common pitfalls.
- **`<pattern>/<problem>/`** — One folder per problem:
  - **`README.md`** — Problem statement, examples, constraints, and solution notes.
  - **`index.ts`** — TypeScript implementation.

---

## Running the code

Install once, then run any problem:

```bash
npm install
```

**Run a problem by path:**

```bash
npm run solve -- twoPointers/moveZeros
npm run solve -- prefixSum/countSubarrays
```

**Or use the shortcut scripts:**

```bash
npm run twoPointers:moveZeros
npm run twoPointers:removeDupes
npm run twoPointers:validPalindrome
npm run prefixSum:countSubarrays
npm run prefixSum:heatmapQueries
npm run prefixSum:signalStability
```

**List all problems:**

```bash
npm run list
```

---

## Quick reference

| When you see… | Think… |
|---------------|--------|
| Sorted array, find pair/target | Two pointers (converging) |
| In-place filter, dedupe, partition | Two pointers (fast/slow) |
| Substring/subarray with sum or “at most/at least” | Sliding window or two pointers |
| Many range-sum or rectangle-sum queries | Prefix sum (1D or 2D) |
| “Total in range l..r” over static data | Prefix sum |

Start with the pattern README (e.g. [Two Pointers](twoPointers/README.md) or [Prefix Sum](prefixSum/README.md)), then open a problem folder for the full problem and solution.
