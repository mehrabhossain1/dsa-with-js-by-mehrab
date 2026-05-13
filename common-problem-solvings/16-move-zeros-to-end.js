/**
 * Problem 16: Move All Zeros to the End of an Array
 * -------------------------------------------------
 * Move all zeros to the end while maintaining the order of non-zero elements.
 *
 * Example:
 *   Input:  [0, 1, 0, 3, 12]
 *   Output: [1, 3, 12, 0, 0]
 *
 *   Input:  [1, 0, 0, 0, 2, 3]
 *   Output: [1, 2, 3, 0, 0, 0]
 */

// Approach 1: Two-pointer in-place (optimal)
// Time: O(n), Space: O(1)
function moveZerosTwoPointer(arr) {
    let writeIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[writeIndex], arr[i]] = [arr[i], arr[writeIndex]];
            writeIndex++;
        }
    }
    return arr;
}

// Approach 2: Overwrite then pad with zeros
// Time: O(n), Space: O(1)
function moveZerosOverwrite(arr) {
    let writeIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[writeIndex++] = arr[i];
        }
    }
    while (writeIndex < arr.length) {
        arr[writeIndex++] = 0;
    }
    return arr;
}

// Approach 3: Filter + pad (creates new array)
// Time: O(n), Space: O(n)
function moveZerosFilter(arr) {
    const nonZeros = arr.filter((x) => x !== 0);
    const zerosCount = arr.length - nonZeros.length;
    return [...nonZeros, ...new Array(zerosCount).fill(0)];
}

// Approach 4: Using splice (in-place but slower)
// Time: O(n^2), Space: O(1)
function moveZerosSplice(arr) {
    let i = 0;
    let zerosCount = 0;
    const originalLength = arr.length;

    while (i < arr.length - zerosCount) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
            arr.push(0);
            zerosCount++;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(moveZerosTwoPointer([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
console.log(moveZerosOverwrite([1, 0, 0, 0, 2, 3])); // [1, 2, 3, 0, 0, 0]
console.log(moveZerosFilter([0, 0, 1])); // [1, 0, 0]
console.log(moveZerosSplice([4, 0, 5, 0, 0, 6])); // [4, 5, 6, 0, 0, 0]
