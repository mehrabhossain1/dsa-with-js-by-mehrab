/**
 * Problem 03: Check if an Array is a Palindrome
 * ---------------------------------------------
 * Determine whether an array reads the same backward as forward.
 *
 * Example:
 *   [1, 2, 3, 2, 1]    -> true
 *   [1, 2, 3, 4, 5]    -> false
 *   ["a", "b", "a"]    -> true
 */

// Approach 1: Compare array with its reverse
// Time: O(n), Space: O(n)
function isPalindromeReverse(arr) {
    return arr.join("|") === [...arr].reverse().join("|");
}

// Approach 2: Two-pointer technique (most efficient)
// Time: O(n/2) = O(n), Space: O(1)
function isPalindromeTwoPointer(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
}

// Approach 3: Recursive approach
// Time: O(n), Space: O(n) due to call stack
function isPalindromeRecursive(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return true;
    if (arr[left] !== arr[right]) return false;
    return isPalindromeRecursive(arr, left + 1, right - 1);
}

// Approach 4: Using every() — functional approach
// Time: O(n), Space: O(1)
function isPalindromeEvery(arr) {
    return arr.every((val, i) => val === arr[arr.length - 1 - i]);
}

console.log(isPalindromeReverse([1, 2, 3, 2, 1])); // true
console.log(isPalindromeTwoPointer([1, 2, 3, 4, 5])); // false
console.log(isPalindromeRecursive(["a", "b", "a"])); // true
console.log(isPalindromeEvery([1, 2, 2, 1])); // true
console.log(isPalindromeTwoPointer([])); // true (empty is palindrome)
