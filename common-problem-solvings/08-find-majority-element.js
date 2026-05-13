/**
 * Problem 08: Find the Majority Element in an Array
 * -------------------------------------------------
 * Find the element that appears more than n/2 times in an array.
 * If no such element exists, return null.
 *
 * Example:
 *   [3, 2, 3]              -> 3
 *   [2, 2, 1, 1, 1, 2, 2]  -> 2
 *   [1, 2, 3, 4]           -> null
 */

// Approach 1: Hash map frequency count
// Time: O(n), Space: O(n)
function majorityElementMap(nums) {
    const freq = new Map();
    const threshold = nums.length / 2;

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        if (freq.get(num) > threshold) return num;
    }
    return null;
}

// Approach 2: Boyer-Moore Voting Algorithm (most efficient)
// Time: O(n), Space: O(1)
function majorityElementBoyerMoore(nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += num === candidate ? 1 : -1;
    }

    let verify = 0;
    for (const num of nums) {
        if (num === candidate) verify++;
    }
    return verify > nums.length / 2 ? candidate : null;
}

// Approach 3: Sort and pick the middle element (must verify)
// Time: O(n log n), Space: O(1) if sorted in place
function majorityElementSort(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const candidate = sorted[Math.floor(sorted.length / 2)];

    const count = nums.filter((n) => n === candidate).length;
    return count > nums.length / 2 ? candidate : null;
}

// Approach 4: Divide and conquer
// Time: O(n log n), Space: O(log n)
function majorityElementDivideConquer(nums, left = 0, right = nums.length - 1) {
    if (left === right) return nums[left];

    const mid = Math.floor((left + right) / 2);
    const leftMajor = majorityElementDivideConquer(nums, left, mid);
    const rightMajor = majorityElementDivideConquer(nums, mid + 1, right);

    if (leftMajor === rightMajor) return leftMajor;

    const leftCount = countInRange(nums, leftMajor, left, right);
    const rightCount = countInRange(nums, rightMajor, left, right);

    return leftCount > rightCount ? leftMajor : rightMajor;
}

function countInRange(nums, target, left, right) {
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (nums[i] === target) count++;
    }
    return count;
}

console.log(majorityElementMap([3, 2, 3])); // 3
console.log(majorityElementBoyerMoore([2, 2, 1, 1, 1, 2, 2])); // 2
console.log(majorityElementSort([1, 2, 3, 4])); // null
console.log(majorityElementDivideConquer([1, 1, 1, 2, 3, 4, 1])); // 1
