/**
 * Remove Duplicates from Sorted Array (In-Place)
 *
 * Implement `removeDuplicates(nums)`:
 * - Remove duplicates in-place so each unique element appears once.
 * - Preserve relative order. Return the number of unique elements (k).
 * - The first k elements of nums must be the unique elements; the rest don't matter.
 * - O(1) extra space.
 *
 * Example:
 *   nums = [1, 1, 2]  =>  k = 2, nums becomes [1, 2, ...]
 */

export function removeDuplicates(nums: number[]): number {
  // TODO: implement
  return 0;
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  input: number[];
  expectedK: number;
  expectedPrefix: number[]; // first k elements must equal this
};

function assertEqual<T>(actual: T, expected: T, msg: string) {
  if (actual !== expected) {
    throw new Error(`${msg}\nExpected: ${expected}\nActual: ${actual}`);
  }
}

function assertArrayEquals(actual: number[], expected: number[], msg: string) {
  if (actual.length !== expected.length || actual.some((v, i) => v !== expected[i])) {
    throw new Error(`${msg}\nExpected: [${expected.join(", ")}]\nActual: [${actual.join(", ")}]`);
  }
}

const tests: TestCase[] = [
  { name: "Example 1", input: [1, 1, 2], expectedK: 2, expectedPrefix: [1, 2] },
  {
    name: "Example 2",
    input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedK: 5,
    expectedPrefix: [0, 1, 2, 3, 4],
  },
  { name: "all same", input: [1, 1, 1, 1], expectedK: 1, expectedPrefix: [1] },
  { name: "no dupes", input: [1, 2, 3, 4], expectedK: 4, expectedPrefix: [1, 2, 3, 4] },
  { name: "single element", input: [7], expectedK: 1, expectedPrefix: [7] },
  { name: "two same", input: [1, 1], expectedK: 1, expectedPrefix: [1] },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const nums = [...t.input];
    const k = removeDuplicates(nums);

    const msg = `❌ ${t.name} | input=[${t.input.join(", ")}]`;
    assertEqual(k, t.expectedK, `${msg} (k)`);
    assertArrayEquals(nums.slice(0, k), t.expectedPrefix, `${msg} (first k elements)`);

    passed++;
    console.log(`✅ ${t.name} | k=${k} | [${nums.slice(0, k).join(", ")}]`);
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();
