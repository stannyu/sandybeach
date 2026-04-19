export function getLongestUniqueSubstringLength(value) {
  const seen = new Set();
  let start = 0;
  let longest = 0;

  for (let index = 0; index < value.length; index += 1) {
    while (seen.has(value[index])) {
      seen.delete(value[start]);
      start += 1;
    }

    seen.add(value[index]);
    longest = Math.max(longest, index - start + 1);
  }

  return longest;
}
