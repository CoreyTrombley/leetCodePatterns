/**
 * Palindrome Window
 *
 * Implement `longestPalindromeSpan(s)`:
 * - Return the [startIndex, endIndexExclusive] of the longest palindromic substring in `s`.
 * - If multiple answers have the same max length, return the one with the smallest startIndex.
 *
 * Notes:
 * - Indices are 0-based.
 * - endIndexExclusive means the span is s.slice(start, end).
 * - You must NOT return the substring itself, only the span.
 *
 * Example:
 *   s = "babad"
 *   valid outputs include [0, 3] => "bab" or [1, 4] => "aba"
 *   but tie-breaker chooses [0, 3]
 */

export type Span = readonly [start: number, endExclusive: number];

export function longestPalindromeSpan(s: string): Span {
  // TODO: implement
  // throw new Error("Not implemented");
  return [0, 0];
}

/* -----------------------------
 * Test Harness (no solution here)
 * ----------------------------- */

type TestCase = {
  name: string;
  input: string;
  expected: Span;
};

function assertSpanEquals(actual: Span, expected: Span, msg: string) {
  const ok = actual[0] === expected[0] && actual[1] === expected[1];
  if (!ok) {
    throw new Error(
      `${msg}\nExpected: [${expected[0]}, ${expected[1]}] => "${thisSlice(
        msg,
        expected
      )}"\nActual:   [${actual[0]}, ${actual[1]}] => "${thisSlice(msg, actual)}"`
    );
  }
}

function isValidSpan(span: Span, s: string): boolean {
  const [a, b] = span;
  return (
    Number.isInteger(a) &&
    Number.isInteger(b) &&
    a >= 0 &&
    b >= 0 &&
    a <= b &&
    b <= s.length
  );
}

function isPalindrome(str: string): boolean {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}

// Used only for error printing; doesn't validate correctness by itself.
function thisSlice(contextMsg: string, span: Span): string {
  // contextMsg includes input in the log line, we re-parse it if possible.
  // If not found, just return "(slice unavailable)".
  const match = contextMsg.match(/input="([\s\S]*)"$/);
  if (!match) return "(slice unavailable)";
  const input = match[1];
  return input.slice(span[0], span[1]);
}

// Additional correctness checks beyond matching expected spans
function validateOutputSpan(s: string, span: Span) {
  if (!isValidSpan(span, s)) {
    throw new Error(
      `Invalid span returned: [${span[0]}, ${span[1]}] for input length ${s.length}`
    );
  }
  const sub = s.slice(span[0], span[1]);
  if (!isPalindrome(sub)) {
    throw new Error(
      `Returned span is not a palindrome: [${span[0]}, ${span[1]}] => "${sub}"`
    );
  }
}

const tests: TestCase[] = [
  {
    name: "empty string",
    input: "",
    expected: [0, 0],
  },
  {
    name: "single char",
    input: "a",
    expected: [0, 1],
  },
  {
    name: "two same chars",
    input: "aa",
    expected: [0, 2],
  },
  {
    name: "two different chars (tie -> earliest)",
    input: "ab",
    expected: [0, 1], // "a" vs "b", choose earliest start
  },
  {
    name: "classic tie case (choose earliest)",
    input: "babad",
    expected: [0, 3], // "bab" (earliest) beats "aba"
  },
  {
    name: "even-length palindrome",
    input: "cbbd",
    expected: [1, 3], // "bb"
  },
  {
    name: "whole string palindrome",
    input: "racecar",
    expected: [0, 7],
  },
  {
    name: "palindrome in the middle",
    input: "zzabccbayy",
    expected: [2, 8], // "abccba"
  },
  {
    name: "many repeats (prefer earliest longest)",
    input: "aaaaabaaaa",
    expected: [0, 10], // whole string is palindrome
  },
  {
    name: "multiple same-length palindromes (choose earliest)",
    input: "abacdfgdcaba",
    expected: [0, 3], // "aba" at start, also "aba" at end
  },
  {
    name: "odd center with noise",
    input: "xyzzzzyx---racecar---nope",
    expected: [0, 8], // "xyzzzzyx"
  },
  {
    name: "palindrome at end",
    input: "nope---racecar",
    expected: [7, 14],
  },
];

function run() {
  let passed = 0;

  for (const t of tests) {
    const actual = longestPalindromeSpan(t.input);

    // sanity checks (span bounds + palindrome property)
    validateOutputSpan(t.input, actual);

    // must match expected span exactly (includes tie-breaking rule)
    const msg = `❌ ${t.name} | input="${t.input}"`;
    assertSpanEquals(actual, t.expected, msg);

    passed++;
    console.log(
      `✅ ${t.name} | span=[${actual[0]}, ${actual[1]}] | "${t.input.slice(
        actual[0],
        actual[1]
      )}"`
    );
  }

  console.log(`\n🎉 Passed ${passed}/${tests.length} tests`);
}

run();