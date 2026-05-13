/**
 * Problem 15: Check if Two Arrays are Equal
 * -----------------------------------------
 * Check whether two arrays contain the same elements, regardless of order.
 *
 * Example:
 *   [1, 2, 3] and [3, 2, 1]      -> true
 *   [1, 2, 3] and [1, 2, 3, 4]   -> false
 *   [1, 1, 2] and [1, 2, 2]      -> false (frequencies must match)
 */

// Approach 1: Sort both, compare element-by-element
// Time: O(n log n), Space: O(n)
function areEqualSort(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, i) => val === sortedB[i]);
}

// Approach 2: Frequency map comparison
// Time: O(n), Space: O(n)
function areEqualFreq(a, b) {
    if (a.length !== b.length) return false;
    const freq = new Map();
    for (const val of a) freq.set(val, (freq.get(val) || 0) + 1);
    for (const val of b) {
        if (!freq.has(val)) return false;
        freq.set(val, freq.get(val) - 1);
        if (freq.get(val) < 0) return false;
    }
    return true;
}

// Approach 3: Using two frequency objects
// Time: O(n), Space: O(n)
function areEqualTwoMaps(a, b) {
    if (a.length !== b.length) return false;

    const buildFreq = (arr) => {
        const map = {};
        for (const val of arr) map[val] = (map[val] || 0) + 1;
        return map;
    };

    const freqA = buildFreq(a);
    const freqB = buildFreq(b);
    const keysA = Object.keys(freqA);

    if (keysA.length !== Object.keys(freqB).length) return false;
    return keysA.every((key) => freqA[key] === freqB[key]);
}

// Approach 4: Strict order-preserving equality
// Time: O(n), Space: O(1)
function areEqualOrdered(a, b) {
    if (a.length !== b.length) return false;
    return a.every((val, i) => val === b[i]);
}

console.log(areEqualSort([1, 2, 3], [3, 2, 1])); // true
console.log(areEqualFreq([1, 1, 2], [1, 2, 2])); // false
console.log(areEqualTwoMaps([1, 2, 3], [1, 2, 3, 4])); // false
console.log(areEqualOrdered([1, 2, 3], [1, 2, 3])); // true
console.log(areEqualOrdered([1, 2, 3], [3, 2, 1])); // false
