/**
 * Count Subarrays With Sum = K
 *
 * Implement `countSubarrays(nums, k)`:
 * - Return the number of contiguous subarrays whose sum equals k.
 * - Handles negative numbers (prefix sum + frequency map).
 *
 * Example:
 *   nums = [1, 1, 1], k = 2  =>  2  (indices 0–1 and 1–2)
 */

export function countSubarrays(nums: number[], k: number): number {
  // TODO: implement
  return 0;
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  nums: number[];
  k: number;
  expected: number;
};

function assertEqual(actual: number, expected: number, msg: string) {
  if (actual !== expected) {
    throw new Error(`${msg}\nExpected: ${expected}\nActual: ${actual}`);
  }
}

const tests: TestCase[] = [
  { name: "Example 1", nums: [1, 1, 1], k: 2, expected: 2 },
  { name: "Example 2", nums: [1, 2, 3], k: 3, expected: 2 },
  { name: "Example 3 (negatives)", nums: [3, 4, -7, 1, 3, 3, 1, -4], k: 7, expected: 4 },
  { name: "single element match", nums: [5], k: 5, expected: 1 },
  { name: "single element no match", nums: [5], k: 3, expected: 0 },
  { name: "empty", nums: [], k: 0, expected: 0 },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const actual = countSubarrays(t.nums, t.k);

    const msg = `❌ ${t.name} | nums=[${t.nums.join(", ")}], k=${t.k}`;
    assertEqual(actual, t.expected, msg);

    passed++;
    console.log(`✅ ${t.name} | ${actual}`);
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();
