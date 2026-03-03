/**
 * Move Zeros In-Place
 *
 * Implement `moveZeros(nums)`:
 * - Move all 0s to the end while keeping the relative order of non-zero elements.
 * - Do this in-place with O(1) extra space.
 *
 * Example:
 *   nums = [0, 1, 0, 3, 12]  =>  [1, 3, 12, 0, 0]
 */

export function moveZeros(nums: number[]): void {
  // TODO: implement
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  input: number[];
  expected: number[];
};

function assertArrayEquals(actual: number[], expected: number[], msg: string) {
  if (actual.length !== expected.length || actual.some((v, i) => v !== expected[i])) {
    throw new Error(`${msg}\nExpected: [${expected.join(", ")}]\nActual: [${actual.join(", ")}]`);
  }
}

const tests: TestCase[] = [
  { name: "Example 1", input: [0, 1, 0, 3, 12], expected: [1, 3, 12, 0, 0] },
  { name: "Example 2", input: [0, 0, 0, 1], expected: [1, 0, 0, 0] },
  { name: "no zeros", input: [4, 2, 1], expected: [4, 2, 1] },
  { name: "single zero", input: [0], expected: [0] },
  { name: "zeros at end", input: [1, 2, 0, 0], expected: [1, 2, 0, 0] },
  { name: "all zeros", input: [0, 0, 0], expected: [0, 0, 0] },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const nums = [...t.input];
    moveZeros(nums);

    const msg = `❌ ${t.name} | input=[${t.input.join(", ")}]`;
    assertArrayEquals(nums, t.expected, msg);

    passed++;
    console.log(`✅ ${t.name} | [${nums.join(", ")}]`);
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();
