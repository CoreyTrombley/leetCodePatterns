/**
 * Heatmap Queries (2D Prefix Sum)
 *
 * Implement `rectangleSums(plays, queries)`:
 * - plays[r][c] = number of plays on day r, region c.
 * - Each query is [r1, c1, r2, c2] (inclusive). Return the sum of plays in that rectangle.
 * - Preprocess once, then answer each query in O(1).
 *
 * Example:
 *   plays = [[2,1,3,0],[4,0,1,2],[1,5,0,1]]
 *   query [0,0,1,2] => 2+1+3+4+0+1 = 11
 */

export function rectangleSums(plays: number[][], queries: number[][]): number[] {
  // TODO: implement
  return [];
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  plays: number[][];
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
    plays: [
      [2, 1, 3, 0],
      [4, 0, 1, 2],
      [1, 5, 0, 1],
    ],
    queries: [
      [0, 0, 1, 2], // rows 0..1, cols 0..2 => 11
      [1, 1, 2, 3], // => 9
      [0, 3, 2, 3],  // last column => 3
    ],
    expected: [11, 9, 3],
  },
  {
    name: "single cell",
    plays: [[1, 2], [3, 4]],
    queries: [[0, 0, 0, 0], [1, 1, 1, 1]],
    expected: [1, 4],
  },
  {
    name: "whole grid",
    plays: [[1, 2], [3, 4]],
    queries: [[0, 0, 1, 1]],
    expected: [10],
  },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const actual = rectangleSums(t.plays, t.queries);

    const msg = `❌ ${t.name}`;
    assertArrayEquals(actual, t.expected, msg);

    passed++;
    console.log(`✅ ${t.name} | [${actual.join(", ")}]`);
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();
