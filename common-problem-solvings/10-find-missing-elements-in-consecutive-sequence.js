/**
 * Problem 10: Find Missing Elements in a Consecutive Sequence
 * -----------------------------------------------------------
 * Given an unsorted array of numbers that should form a consecutive sequence,
 * return all missing numbers.
 *
 * Example:
 *   Input:  [1, 2, 4, 6, 7]
 *   Output: [3, 5]
 *
 *   Input:  [10, 12, 11, 15]
 *   Output: [13, 14]
 */

// Approach 1: Using a Set (efficient and clean)
// Time: O(n), Space: O(n)
function findMissingSet(arr) {
    if (arr.length === 0) return [];
    const set = new Set(arr);
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const missing = [];

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) missing.push(i);
    }
    return missing;
}

// Approach 2: Sort then scan for gaps
// Time: O(n log n), Space: O(n)
function findMissingSort(arr) {
    if (arr.length === 0) return [];
    const sorted = [...arr].sort((a, b) => a - b);
    const missing = [];

    for (let i = 1; i < sorted.length; i++) {
        for (let n = sorted[i - 1] + 1; n < sorted[i]; n++) {
            missing.push(n);
        }
    }
    return missing;
}

// Approach 3: Using a frequency object
// Time: O(n + range), Space: O(n)
function findMissingFreq(arr) {
    if (arr.length === 0) return [];
    const freq = {};
    let min = Infinity;
    let max = -Infinity;

    for (const num of arr) {
        freq[num] = true;
        if (num < min) min = num;
        if (num > max) max = num;
    }

    const missing = [];
    for (let i = min; i <= max; i++) {
        if (!freq[i]) missing.push(i);
    }
    return missing;
}

// Approach 4: Using filter from a constructed range
// Time: O(n), Space: O(n)
function findMissingFilter(arr) {
    if (arr.length === 0) return [];
    const set = new Set(arr);
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(
        (n) => !set.has(n),
    );
}

console.log(findMissingSet([1, 2, 4, 6, 7])); // [3, 5]
console.log(findMissingSort([10, 12, 11, 15])); // [13, 14]
console.log(findMissingFreq([5, 7, 9, 10])); // [6, 8]
console.log(findMissingFilter([1, 2, 3, 4, 5])); // []
