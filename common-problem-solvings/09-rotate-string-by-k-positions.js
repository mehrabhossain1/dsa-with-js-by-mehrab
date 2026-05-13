/**
 * Problem 09: Rotate a String by k Positions
 * ------------------------------------------
 * Rotate a string to the right by k positions.
 *
 * Example:
 *   Input:  "hello", k = 2
 *   Output: "lohel"
 *
 *   Input:  "abcdef", k = 4
 *   Output: "cdefab"
 */

// Approach 1: Using slice + concat
// Time: O(n), Space: O(n)
function rotateStringSlice(str, k) {
    if (!str.length) return str;
    k = k % str.length;
    return str.slice(-k) + str.slice(0, -k);
}

// Approach 2: Manual character-by-character construction
// Time: O(n), Space: O(n)
function rotateStringManual(str, k) {
    const n = str.length;
    if (n === 0) return str;
    k = k % n;
    let result = "";

    for (let i = 0; i < n; i++) {
        result += str[(i - k + n) % n];
    }
    return result;
}

// Approach 3: Concatenate and slice (clever trick)
// Time: O(n), Space: O(n)
function rotateStringConcat(str, k) {
    const n = str.length;
    if (n === 0) return str;
    k = k % n;
    const doubled = str + str;
    return doubled.slice(n - k, 2 * n - k);
}

// Approach 4: Rotate left by k (variant)
// Time: O(n), Space: O(n)
function rotateStringLeft(str, k) {
    const n = str.length;
    if (n === 0) return str;
    k = k % n;
    return str.slice(k) + str.slice(0, k);
}

// Approach 5: Using array reverse trick (3 reversals)
// Time: O(n), Space: O(n)
function rotateStringReverse(str, k) {
    const n = str.length;
    if (n === 0) return str;
    k = k % n;
    const arr = str.split("");

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

    return arr.join("");
}

console.log(rotateStringSlice("hello", 2)); // "lohel"
console.log(rotateStringManual("abcdef", 4)); // "cdefab"
console.log(rotateStringConcat("javascript", 3)); // "iptjavascr"
console.log(rotateStringLeft("hello", 2)); // "llohe"
console.log(rotateStringReverse("hello", 2)); // "lohel"
