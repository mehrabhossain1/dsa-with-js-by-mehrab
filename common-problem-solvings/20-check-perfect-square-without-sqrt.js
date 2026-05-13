/**
 * Problem 20: Check if a Number is a Perfect Square Without Math.sqrt()
 * ---------------------------------------------------------------------
 * Determine if a number is a perfect square using loops or binary search.
 *
 * A perfect square is an integer that is the square of another integer.
 *
 * Example:
 *   16   -> true   (4 * 4)
 *   25   -> true   (5 * 5)
 *   14   -> false
 *   1    -> true
 *   0    -> true
 *   -4   -> false
 */

// Approach 1: Linear loop (brute force)
// Time: O(sqrt(n)), Space: O(1)
function isPerfectSquareLinear(n) {
    if (n < 0) return false;
    if (n === 0 || n === 1) return true;

    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) return true;
    }
    return false;
}

// Approach 2: Binary search (most efficient)
// Time: O(log n), Space: O(1)
function isPerfectSquareBinary(n) {
    if (n < 0) return false;
    if (n === 0 || n === 1) return true;

    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const square = mid * mid;

        if (square === n) return true;
        if (square < n) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}

// Approach 3: Sum of odd numbers trick
// (1 + 3 + 5 + 7 + ... + (2k-1) = k^2)
// Time: O(sqrt(n)), Space: O(1)
function isPerfectSquareOddSum(n) {
    if (n < 0) return false;
    let odd = 1;
    while (n > 0) {
        n -= odd;
        odd += 2;
    }
    return n === 0;
}

// Approach 4: Newton's method (without Math.sqrt)
// Time: O(log n), Space: O(1)
function isPerfectSquareNewton(n) {
    if (n < 0) return false;
    if (n === 0 || n === 1) return true;

    let x = n;
    while (x * x > n) {
        x = Math.floor((x + Math.floor(n / x)) / 2);
    }
    return x * x === n;
}

// Approach 5: Recursive binary search
// Time: O(log n), Space: O(log n)
function isPerfectSquareRecursive(n, left = 1, right = n) {
    if (n < 0) return false;
    if (n === 0 || n === 1) return true;
    if (left > right) return false;

    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === n) return true;
    if (square < n) return isPerfectSquareRecursive(n, mid + 1, right);
    return isPerfectSquareRecursive(n, left, mid - 1);
}

console.log(isPerfectSquareLinear(16)); // true
console.log(isPerfectSquareBinary(25)); // true
console.log(isPerfectSquareOddSum(14)); // false
console.log(isPerfectSquareNewton(1)); // true
console.log(isPerfectSquareRecursive(0)); // true
console.log(isPerfectSquareBinary(-4)); // false
console.log(isPerfectSquareBinary(2147395600)); // true (46340^2)
