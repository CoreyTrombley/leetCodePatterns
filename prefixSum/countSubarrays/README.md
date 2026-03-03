# Problem: Count Subarrays With Sum = K

You are given an integer array `nums` and an integer `k`.

Return the number of **contiguous subarrays** whose sum equals `k`.

---

## Function Signature

```ts
function countSubarrays(nums: number[], k: number): number
```

---

## Example 1

```ts
nums = [1, 1, 1]
k = 2
```

Subarrays that sum to 2:

* [1, 1] (index 0–1)
* [1, 1] (index 1–2)

Answer:

```
2
```

---

## Example 2

```ts
nums = [1, 2, 3]
k = 3
```

Subarrays:

* [1,2]
* [3]

Answer:

```
2
```

---

## Example 3 (Important — contains negatives)

```ts
nums = [3, 4, -7, 1, 3, 3, 1, -4]
k = 7
```

Answer:

```
4
```

This one kills sliding window solutions.
This one forces prefix sums.

---

# Constraints

* 1 ≤ nums.length ≤ 10⁵
* -10⁴ ≤ nums[i] ≤ 10⁴
* -10⁷ ≤ k ≤ 10⁷

Target complexity:

* O(n) time
* O(n) space

---

# Important Notes

* Subarrays must be contiguous.
* Numbers can be negative.
* Brute force O(n²) will not pass large inputs.

---

# Hint (not the full trick, just a nudge)

As you iterate:

* Maintain a running prefix sum.
* Ask:

  > How many times have I seen (currentPrefix - k) before?

That question is the whole algorithm hiding in plain sight.