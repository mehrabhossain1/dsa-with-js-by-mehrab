/**
 * Problem 12: Find the Missing Number in an Array
 * -----------------------------------------------
 * Given an array containing numbers from 1 to n with exactly one number missing,
 * find the missing number efficiently.
 *
 * Example:
 *   Input:  [1, 2, 4, 5, 6], n = 6
 *   Output: 3
 *
 *   Input:  [3, 7, 1, 2, 8, 4, 5], n = 8
 *   Output: 6
 */

// Approach 1: Using sum formula (Gauss)
// Time: O(n), Space: O(1)
function findMissingSum(arr, n) {
    const expected = (n * (n + 1)) / 2;
    const actual = arr.reduce((acc, num) => acc + num, 0);
    return expected - actual;
}

// Approach 2: Using XOR (works without knowing n)
// Time: O(n), Space: O(1)
function findMissingXOR(arr, n) {
    let xor = 0;
    for (let i = 1; i <= n; i++) xor ^= i;
    for (const num of arr) xor ^= num;
    return xor;
}

// Approach 3: Using a Set
// Time: O(n), Space: O(n)
function findMissingSet(arr, n) {
    const set = new Set(arr);
    for (let i = 1; i <= n; i++) {
        if (!set.has(i)) return i;
    }
    return -1;
}

// Approach 4: Sort and find the gap
// Time: O(n log n), Space: O(1)
function findMissingSort(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] !== i + 1) return i + 1;
    }
    return sorted.length + 1;
}

// Approach 5: Binary search (works on sorted array)
// Time: O(log n), Space: O(1)
function findMissingBinarySearch(sortedArr) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArr[mid] === mid + 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left + 1;
}

console.log(findMissingSum([1, 2, 4, 5, 6], 6)); // 3
console.log(findMissingXOR([3, 7, 1, 2, 8, 4, 5], 8)); // 6
console.log(findMissingSet([1, 2, 3, 5], 5)); // 4
console.log(findMissingSort([5, 3, 1, 2])); // 4
console.log(findMissingBinarySearch([1, 2, 3, 4, 6, 7, 8])); // 5
