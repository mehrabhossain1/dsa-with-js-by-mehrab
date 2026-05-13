/**
 * Problem 11: Rotate an Array by k Positions
 * ------------------------------------------
 * Rotate an array to the right by k positions without using built-in rotate
 * functions (no built-in shortcut like a rotate method).
 *
 * Example:
 *   Input:  [1, 2, 3, 4, 5], k = 2
 *   Output: [4, 5, 1, 2, 3]
 *
 *   Input:  [1, 2, 3, 4, 5, 6, 7], k = 3
 *   Output: [5, 6, 7, 1, 2, 3, 4]
 */

// Approach 1: Using slice + concat
// Time: O(n), Space: O(n)
function rotateArraySlice(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
}

// Approach 2: Using extra array (positional placement)
// Time: O(n), Space: O(n)
function rotateArrayExtra(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;
    const rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = arr[i];
    }
    return rotated;
}

// Approach 3: Three-reversal technique (in-place)
// Time: O(n), Space: O(1)
function rotateArrayReverse(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;

    const reverse = (a, l, r) => {
        while (l < r) {
            [a[l], a[r]] = [a[r], a[l]];
            l++;
            r--;
        }
    };

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    return arr;
}

// Approach 4: One-step-at-a-time (cyclic shift)
// Time: O(n*k), Space: O(1)
function rotateArrayOneByOne(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;
    k = k % n;

    for (let i = 0; i < k; i++) {
        const last = arr[n - 1];
        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
    return arr;
}

console.log(rotateArraySlice([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrayExtra([1, 2, 3, 4, 5, 6, 7], 3)); // [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArrayReverse([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
console.log(rotateArrayOneByOne([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
