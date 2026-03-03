/**
 * Signal Stability (Range Sum Queries)
 *
 * Implement `rangeSums(deltas, queries)`:
 * - deltas = daily load deltas (positive = increase, negative = decrease).
 * - Each query is [l, r] (inclusive). Return the total load change from index l to r.
 * - Answer each query in O(1) after O(n) preprocessing (prefix sum).
 *
 * Example:
 *   deltas = [3, -2, 5, -1, 2, -4, 6]
 *   query [0, 2] => 3 + (-2) + 5 = 6
 */

export function rangeSums(deltas: number[], queries: number[][]): number[] {
  // TODO: implement
  return [];
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  deltas: number[];
  queries: number[][];
  expected: number[];
};

function assertArrayEquals(actual: number[], expected: number[], msg: string) {
  if (actual.length !== expected.length || actual.some((v, i) => v !== expected[i])) {
    throw new Error(`${msg}\nExpected: [${expected.join(", ")}]\nActual: [${actual.join(", ")}]`);
  }
}

const tests: TestCase[] = [
  {
    name: "Example",
    deltas: [3, -2, 5, -1, 2, -4, 6],
    queries: [
      [0, 2], // 3 + (-2) + 5 = 6
      [1, 4], // -2 + 5 + (-1) + 2 = 4
      [3, 6], // -1 + 2 + (-4) + 6 = 3
      [2, 2], // 5
    ],
    expected: [6, 4, 3, 5],
  },
  {
    name: "single element",
    deltas: [10],
    queries: [[0, 0]],
    expected: [10],
  },
  {
    name: "two queries same range",
    deltas: [1, 2, 3],
    queries: [[0, 2], [0, 2]],
    expected: [6, 6],
  },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const actual = rangeSums(t.deltas, t.queries);

    const msg = `❌ ${t.name}`;
    assertArrayEquals(actual, t.expected, msg);

    passed++;
    console.log(`✅ ${t.name} | [${actual.join(", ")}]`);
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();
