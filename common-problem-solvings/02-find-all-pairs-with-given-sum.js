/**
 * Problem 02: Find All Pairs With a Given Sum
 * -------------------------------------------
 * Given an array and a target sum, return all pairs of numbers
 * whose sum equals the target.
 *
 * Example:
 *   Input:  arr = [1, 2, 3, 4, 5], target = 6
 *   Output: [[1, 5], [2, 4]]
 */

// Approach 1: Brute force using nested loops
// Time: O(n^2), Space: O(1) extra (excluding result)
function findPairsBruteForce(arr, target) {
    const pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Approach 2: Using a Set (single-pass) — efficient
// Time: O(n), Space: O(n)
function findPairsWithSet(arr, target) {
    const seen = new Set();
    const pairs = [];

    for (const num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }
    return pairs;
}

// Approach 3: Two-pointer approach on a sorted array
// Time: O(n log n) due to sort, Space: O(1) extra
function findPairsTwoPointer(arr, target) {
    const sorted = [...arr].sort((a, b) => a - b);
    const pairs = [];
    let left = 0;
    let right = sorted.length - 1;

    while (left < right) {
        const sum = sorted[left] + sorted[right];
        if (sum === target) {
            pairs.push([sorted[left], sorted[right]]);
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return pairs;
}

// Approach 4: Return unique pairs only (handles duplicates)
// Time: O(n), Space: O(n)
function findUniquePairs(arr, target) {
    const seen = new Set();
    const uniquePairs = new Set();

    for (const num of arr) {
        const complement = target - num;
        if (seen.has(complement)) {
            const key = [Math.min(num, complement), Math.max(num, complement)].join(",");
            uniquePairs.add(key);
        }
        seen.add(num);
    }
    return Array.from(uniquePairs).map((p) => p.split(",").map(Number));
}

console.log(findPairsBruteForce([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
console.log(findPairsWithSet([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
console.log(findPairsTwoPointer([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]
console.log(findUniquePairs([1, 5, 2, 4, 3, 5, 1], 6)); // [[1, 5], [2, 4]]
