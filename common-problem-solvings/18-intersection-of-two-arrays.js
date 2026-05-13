/**
 * Problem 18: Find the Intersection of Two Arrays
 * -----------------------------------------------
 * Return the common elements between two arrays.
 *
 * Example:
 *   [1, 2, 2, 1] and [2, 2]        -> [2]
 *   [4, 9, 5] and [9, 4, 9, 8, 4]  -> [4, 9]
 */

// Approach 1: Using Set (unique values)
// Time: O(n + m), Space: O(n)
function intersectionSet(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const result = [];

    for (const val of setA) {
        if (setB.has(val)) result.push(val);
    }
    return result;
}

// Approach 2: Filter + includes (brute force)
// Time: O(n * m), Space: O(min(n, m))
function intersectionFilter(a, b) {
    return [...new Set(a)].filter((val) => b.includes(val));
}

// Approach 3: With duplicates preserved (frequency match)
// Time: O(n + m), Space: O(min(n, m))
function intersectionWithDuplicates(a, b) {
    const freq = new Map();
    for (const val of a) freq.set(val, (freq.get(val) || 0) + 1);

    const result = [];
    for (const val of b) {
        if (freq.get(val) > 0) {
            result.push(val);
            freq.set(val, freq.get(val) - 1);
        }
    }
    return result;
}

// Approach 4: Sorted arrays with two pointers (great for huge arrays)
// Time: O(n log n + m log m), Space: O(1) extra (excluding sort)
function intersectionTwoPointer(a, b) {
    const sortedA = [...a].sort((x, y) => x - y);
    const sortedB = [...b].sort((x, y) => x - y);
    const result = [];
    let i = 0;
    let j = 0;

    while (i < sortedA.length && j < sortedB.length) {
        if (sortedA[i] === sortedB[j]) {
            if (result[result.length - 1] !== sortedA[i]) {
                result.push(sortedA[i]);
            }
            i++;
            j++;
        } else if (sortedA[i] < sortedB[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}

console.log(intersectionSet([1, 2, 2, 1], [2, 2])); // [2]
console.log(intersectionFilter([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersectionWithDuplicates([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersectionTwoPointer([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
