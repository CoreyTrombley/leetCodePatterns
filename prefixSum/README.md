
# What Is a Prefix Array Really?

Forget formulas.

A prefix array is just:

> “At every position, store the total so far.”

That’s it.

It’s cumulative memory.

---

## Example

```ts
arr = [3, 1, 4, 2]
```

We walk left → right, carrying a running total.

| index | value | running total |
| ----- | ----- | ------------- |
| 0     | 3     | 3             |
| 1     | 1     | 4             |
| 2     | 4     | 8             |
| 3     | 2     | 10            |

So prefix becomes:

```ts
prefix = [3, 4, 8, 10]
```

Each cell answers:

> “What’s the sum from the start up to here?”

---

# Why Is This Useful?

Because range sums become subtraction.

Say you want:

```
sum from index 1 to 3
```

That’s:

```
1 + 4 + 2 = 7
```

Using prefix:

```
prefix[3] - prefix[0]
= 10 - 3
= 7
```

Why?

Because:

* prefix[3] = sum 0 → 3
* prefix[0] = sum 0 → 0
* subtracting removes the part before index 1

You’re surgically removing the left portion.

That’s the core idea.

---

# The Slight Upgrade (Cleaner Version)

Most people add a leading zero.

Instead of:

```ts
prefix = [3, 4, 8, 10]
```

We build:

```ts
prefix = [0, 3, 4, 8, 10]
```

Now:

```
prefix[i] = sum of first i elements
```

So:

```
sum(l..r) = prefix[r+1] - prefix[l]
```

And you never deal with negative indices.

This “padding trick” is the secret sauce.

---

# Conceptual Model (The Real Understanding)

Think of prefix arrays like saving checkpoints in a video game.

Instead of replaying from the start every time,
you fast-travel using stored progress.

Without prefix:
To get sum(l..r), you re-walk the range every time.

With prefix:
You teleport to r, teleport to l, subtract.

---

# Complexity Shift

Without prefix:

* Each query: O(n)

With prefix:

* Preprocessing: O(n)
* Each query: O(1)

That’s the whole reason prefix sums exist.

You trade one initial scan for instant lookups forever after.

---

# Mental Exercise (Do This)

Given:

```ts
arr = [5, 2, 7, 1, 3]
```

1. Build the prefix array (with padding zero).
2. Compute sum from index 2 to 4 using prefix only.
3. Explain to me why the subtraction works in words.

Don’t code yet.

Just reason it.

Once 1D clicks, 2D becomes:

> “Do the same idea, but subtract rectangles instead of lines.”

And suddenly the scary formula becomes just geometry.