/**
 * Problem 13: Merge Two Sorted Arrays
 * -----------------------------------
 * Merge two sorted arrays into one sorted array without using sort().
 *
 * Example:
 *   a = [1, 3, 5], b = [2, 4, 6]  -> [1, 2, 3, 4, 5, 6]
 *   a = [1, 2, 3], b = [4, 5, 6]  -> [1, 2, 3, 4, 5, 6]
 */

// Approach 1: Two-pointer merge (classic merge-sort merge step)
// Time: O(m + n), Space: O(m + n)
function mergeTwoPointer(a, b) {
    const merged = [];
    let i = 0;
    let j = 0;

    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) merged.push(a[i++]);
        else merged.push(b[j++]);
    }

    while (i < a.length) merged.push(a[i++]);
    while (j < b.length) merged.push(b[j++]);

    return merged;
}

// Approach 2: Recursive merge
// Time: O(m + n), Space: O(m + n) due to recursion
function mergeRecursive(a, b) {
    if (a.length === 0) return [...b];
    if (b.length === 0) return [...a];

    if (a[0] <= b[0]) {
        return [a[0], ...mergeRecursive(a.slice(1), b)];
    }
    return [b[0], ...mergeRecursive(a, b.slice(1))];
}

// Approach 3: In-place merge into the first array (LeetCode 88 style)
// Time: O(m + n), Space: O(1)
function mergeInPlace(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
}

// Approach 4: Concatenate and sort manually with insertion-sort logic
// Time: O((m + n)^2), Space: O(m + n)
function mergeInsertion(a, b) {
    const merged = [...a, ...b];
    for (let i = 1; i < merged.length; i++) {
        const key = merged[i];
        let j = i - 1;
        while (j >= 0 && merged[j] > key) {
            merged[j + 1] = merged[j];
            j--;
        }
        merged[j + 1] = key;
    }
    return merged;
}

console.log(mergeTwoPointer([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeRecursive([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeInPlace([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// [1, 2, 2, 3, 5, 6]
console.log(mergeInsertion([10, 20, 30], [5, 15, 25])); // [5, 10, 15, 20, 25, 30]
