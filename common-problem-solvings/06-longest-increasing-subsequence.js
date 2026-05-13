/**
 * Problem 06: Longest Increasing Subsequence (LIS)
 * ------------------------------------------------
 * Given an array of numbers, find the length of the longest strictly increasing
 * subsequence (elements need not be contiguous).
 *
 * Example:
 *   Input:  [10, 9, 2, 5, 3, 7, 101, 18]
 *   Output: 4   (the LIS is [2, 3, 7, 101])
 *
 *   Input:  [0, 1, 0, 3, 2, 3]
 *   Output: 4   (the LIS is [0, 1, 2, 3])
 */

// Approach 1: Dynamic Programming
// Time: O(n^2), Space: O(n)
function lisDP(nums) {
    if (nums.length === 0) return 0;
    const dp = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return Math.max(...dp);
}

// Approach 2: Patience Sorting with Binary Search
// Time: O(n log n), Space: O(n)
function lisBinarySearch(nums) {
    const tails = [];

    for (const num of nums) {
        let left = 0;
        let right = tails.length;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        tails[left] = num;
    }
    return tails.length;
}

// Approach 3: Recursive with memoization
// Time: O(n^2), Space: O(n^2)
function lisMemo(nums) {
    const memo = new Map();

    function helper(prev, curr) {
        if (curr === nums.length) return 0;
        const key = `${prev},${curr}`;
        if (memo.has(key)) return memo.get(key);

        let taken = 0;
        if (prev === -1 || nums[curr] > nums[prev]) {
            taken = 1 + helper(curr, curr + 1);
        }
        const notTaken = helper(prev, curr + 1);

        const result = Math.max(taken, notTaken);
        memo.set(key, result);
        return result;
    }

    return helper(-1, 0);
}

// Approach 4: Also return the actual subsequence, not just length
// Time: O(n^2), Space: O(n)
function lisWithSequence(nums) {
    if (nums.length === 0) return { length: 0, sequence: [] };

    const dp = new Array(nums.length).fill(1);
    const prev = new Array(nums.length).fill(-1);
    let maxIdx = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j;
            }
        }
        if (dp[i] > dp[maxIdx]) maxIdx = i;
    }

    const sequence = [];
    for (let i = maxIdx; i !== -1; i = prev[i]) {
        sequence.unshift(nums[i]);
    }
    return { length: dp[maxIdx], sequence };
}

console.log(lisDP([10, 9, 2, 5, 3, 7, 101, 18])); // 4
console.log(lisBinarySearch([0, 1, 0, 3, 2, 3])); // 4
console.log(lisMemo([7, 7, 7, 7, 7])); // 1
console.log(lisWithSequence([10, 9, 2, 5, 3, 7, 101, 18]));
// { length: 4, sequence: [2, 5, 7, 101] }  (one of several valid LIS)
