
# Palindrome Window

## 🧩 Problem

Implement the function:

```ts
export function longestPalindromeSpan(s: string): readonly [number, number];
````

Return the `[startIndex, endIndexExclusive]` span of the **longest palindromic substring** in `s`.

### Rules

* Indices are **0-based**
* `endIndexExclusive` means the palindrome is `s.slice(start, end)`
* If multiple palindromes share the same maximum length:

  * **Return the one with the smallest start index**

You must return the span, **not** the substring itself.

---

## ✍️ Examples

| Input       | Output   | Explanation                                         |
| ----------- | -------- | --------------------------------------------------- |
| `"babad"`   | `[0, 3]` | `"bab"` and `"aba"` both length 3 → choose earliest |
| `"cbbd"`    | `[1, 3]` | `"bb"`                                              |
| `"racecar"` | `[0, 7]` | Entire string is a palindrome                       |
| `"ab"`      | `[0, 1]` | `"a"` and `"b"` tie → choose earliest               |

---

## 📌 Constraints

* `s` may be empty
* `s` may contain any characters
* Aim to handle strings up to several thousand characters efficiently

---

## 🧠 Best Pattern to Solve It

### Expand Around Center (Recommended)

Every palindrome expands outward from a center.

There are **two types of centers**:

1. **Odd-length palindromes** centered on a character
   Example: `"racecar"`
2. **Even-length palindromes** centered between characters
   Example: `"abba"`

### Strategy

For each index `i`:

* Expand around `(i, i)` for odd-length palindromes
* Expand around `(i, i + 1)` for even-length palindromes
* While characters match, grow outward
* Track the longest valid span found
* If two spans tie in length, keep the one with the smaller start index

### Complexity

* Time: `O(n²)` worst case
* Space: `O(1)`

This is the most common interview-expected solution.

---

## 🧮 Alternative Approach (Optional Exploration)

### Dynamic Programming

You can build a 2D table where:

```ts
dp[i][j] = true if s[i..j] is a palindrome
```

But:

* Time: `O(n²)`
* Space: `O(n²)`
* More complex to implement correctly

Useful if solving many palindrome queries on the same string.

---

## 🚀 How to Run

Install dependencies:

```bash
npm install -D ts-node typescript
```

Run:

```bash
npx ts-node palindrome-window.ts
```

If your implementation is correct, all tests will pass.

If not, the test harness prints:

* Expected span
* Your returned span
* The substring each span corresponds to

---

## 🎯 What This Tests

* Two-pointer technique
* Careful boundary handling
* Tie-breaking logic
* Index arithmetic precision
* Edge-case thinking

If you can implement this cleanly in under 20 minutes during a live session, you’re in very solid shape.