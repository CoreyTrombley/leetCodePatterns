Excellent. This is the natural evolution of what you just did.

This one sharpens the invariant thinking.

---

# 🧠 Problem: Remove Duplicates from Sorted Array (In-Place)

You are given a **sorted** integer array `nums`.

Remove the duplicates **in-place** such that:

* Each unique element appears only once.
* The relative order of elements must remain the same.
* Return the number of unique elements.
* The first `k` elements of `nums` should contain the unique elements.
* The remaining elements after `k` do not matter.

You must use **O(1) extra space**.

---

## Example 1

Input:

```
nums = [1, 1, 2]
```

After processing:

```
nums = [1, 2, _]
```

Return:

```
2
```

---

## Example 2

Input:

```
nums = [0,0,1,1,1,2,2,3,3,4]
```

After processing:

```
nums = [0,1,2,3,4,_,_,_,_,_]
```

Return:

```
5
```

---

# 🔍 Important Observations

* The array is sorted.
* That means duplicates are adjacent.
* You don’t need a map.
* You don’t need swapping necessarily.
* You just need to track where the next unique value goes.

This is a **fast/slow pointer problem**, but the invariant is slightly different from Move Zeros.

---

# 🧩 Function Signature

```ts
function removeDuplicates(nums: number[]): number
```
