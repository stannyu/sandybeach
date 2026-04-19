import test from 'node:test';
import assert from 'node:assert/strict';
import { getLongestUniqueSubstringLength } from './longestSubstring.js';

test('returns zero for an empty string', () => {
  assert.equal(getLongestUniqueSubstringLength(''), 0);
});

test('returns the full length when all characters are unique', () => {
  assert.equal(getLongestUniqueSubstringLength('abcdef'), 6);
});

test('handles repeated characters with a sliding window', () => {
  assert.equal(getLongestUniqueSubstringLength('abcabcbb'), 3);
  assert.equal(getLongestUniqueSubstringLength('bbbbb'), 1);
  assert.equal(getLongestUniqueSubstringLength('pwwkew'), 3);
});

test('keeps the longest window after duplicates appear mid-string', () => {
  assert.equal(getLongestUniqueSubstringLength('dvdf'), 3);
  assert.equal(getLongestUniqueSubstringLength('abba'), 2);
  assert.equal(getLongestUniqueSubstringLength('tmmzuxt'), 5);
});
