/**
 * Problem 19: First Non-Repeating Character in a String
 * -----------------------------------------------------
 * Return the first character that does not repeat in the string.
 * If every character repeats, return null.
 *
 * Example:
 *   "swiss"     -> "w"
 *   "aabbcc"    -> null
 *   "leetcode"  -> "l"
 */

// Approach 1: Frequency map then second pass
// Time: O(n), Space: O(1) for fixed charset / O(n) general
function firstNonRepeatingMap(str) {
    const freq = new Map();
    for (const ch of str) freq.set(ch, (freq.get(ch) || 0) + 1);

    for (const ch of str) {
        if (freq.get(ch) === 1) return ch;
    }
    return null;
}

// Approach 2: Using object as frequency map
// Time: O(n), Space: O(n)
function firstNonRepeatingObj(str) {
    const freq = {};
    for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;

    for (const ch of str) {
        if (freq[ch] === 1) return ch;
    }
    return null;
}

// Approach 3: Using indexOf and lastIndexOf
// Time: O(n^2), Space: O(1)
function firstNonRepeatingIndexOf(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}

// Approach 4: Returns its index instead of the character
// Time: O(n), Space: O(n)
function firstNonRepeatingIndex(str) {
    const freq = new Map();
    for (const ch of str) freq.set(ch, (freq.get(ch) || 0) + 1);

    for (let i = 0; i < str.length; i++) {
        if (freq.get(str[i]) === 1) return i;
    }
    return -1;
}

// Approach 5: Using filter + find (functional)
// Time: O(n^2), Space: O(n)
function firstNonRepeatingFind(str) {
    return (
        str
            .split("")
            .find((ch, _, arr) => arr.filter((c) => c === ch).length === 1) ??
        null
    );
}

console.log(firstNonRepeatingMap("swiss")); // "w"
console.log(firstNonRepeatingObj("aabbcc")); // null
console.log(firstNonRepeatingIndexOf("leetcode")); // "l"
console.log(firstNonRepeatingIndex("loveleetcode")); // 2
console.log(firstNonRepeatingFind("aabbcdd")); // "c"
