/**
 * Problem 14: Longest Substring Without Repeating Characters
 * ----------------------------------------------------------
 * Given a string, find the length of the longest substring that contains
 * no repeated characters.
 *
 * Example:
 *   "abcabcbb"  -> 3   (the substring "abc")
 *   "bbbbb"     -> 1   (the substring "b")
 *   "pwwkew"    -> 3   (the substring "wke")
 */

// Approach 1: Sliding window with Set
// Time: O(n), Space: O(min(n, charset))
function longestSubstringSet(str) {
    const seen = new Set();
    let left = 0;
    let max = 0;

    for (let right = 0; right < str.length; right++) {
        while (seen.has(str[right])) {
            seen.delete(str[left]);
            left++;
        }
        seen.add(str[right]);
        max = Math.max(max, right - left + 1);
    }
    return max;
}

// Approach 2: Sliding window with Map storing last index (optimized jump)
// Time: O(n), Space: O(min(n, charset))
function longestSubstringMap(str) {
    const lastIndex = new Map();
    let start = 0;
    let max = 0;

    for (let i = 0; i < str.length; i++) {
        if (lastIndex.has(str[i]) && lastIndex.get(str[i]) >= start) {
            start = lastIndex.get(str[i]) + 1;
        }
        lastIndex.set(str[i], i);
        max = Math.max(max, i - start + 1);
    }
    return max;
}

// Approach 3: Brute force — check every substring
// Time: O(n^3), Space: O(min(n, charset))
function longestSubstringBrute(str) {
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const sub = str.slice(i, j + 1);
            if (new Set(sub).size === sub.length) {
                max = Math.max(max, sub.length);
            }
        }
    }
    return max;
}

// Approach 4: Returns the actual longest substring, not just length
// Time: O(n), Space: O(min(n, charset))
function longestSubstringValue(str) {
    const lastIndex = new Map();
    let start = 0;
    let max = 0;
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (lastIndex.has(str[i]) && lastIndex.get(str[i]) >= start) {
            start = lastIndex.get(str[i]) + 1;
        }
        lastIndex.set(str[i], i);
        if (i - start + 1 > max) {
            max = i - start + 1;
            result = str.slice(start, i + 1);
        }
    }
    return result;
}

console.log(longestSubstringSet("abcabcbb")); // 3
console.log(longestSubstringMap("bbbbb")); // 1
console.log(longestSubstringBrute("pwwkew")); // 3
console.log(longestSubstringValue("abcabcbb")); // "abc"
console.log(longestSubstringValue("dvdf")); // "vdf"
