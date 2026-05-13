/**
 * Problem 05: Remove Duplicate Characters from a String
 * -----------------------------------------------------
 * Remove duplicate characters from a string while maintaining the original order.
 *
 * Example:
 *   "programming"  -> "progamin"
 *   "hello world"  -> "helo wrd"
 */

// Approach 1: Using a Set
// Time: O(n), Space: O(n)
function removeDuplicatesSet(str) {
    const seen = new Set();
    let result = "";
    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}

// Approach 2: Using filter + indexOf
// Time: O(n^2), Space: O(n)
function removeDuplicatesFilter(str) {
    return str
        .split("")
        .filter((char, index, arr) => arr.indexOf(char) === index)
        .join("");
}

// Approach 3: Using an object/map as a frequency tracker
// Time: O(n), Space: O(n)
function removeDuplicatesMap(str) {
    const seen = {};
    let result = "";
    for (const char of str) {
        if (!seen[char]) {
            seen[char] = true;
            result += char;
        }
    }
    return result;
}

// Approach 4: One-liner using Set spread on string
// Time: O(n), Space: O(n)
function removeDuplicatesOneLiner(str) {
    return [...new Set(str)].join("");
}

// Approach 5: Using reduce
// Time: O(n), Space: O(n)
function removeDuplicatesReduce(str) {
    return str.split("").reduce((acc, char) => {
        return acc.includes(char) ? acc : acc + char;
    }, "");
}

console.log(removeDuplicatesSet("programming")); // "progamin"
console.log(removeDuplicatesFilter("hello world")); // "helo wrd"
console.log(removeDuplicatesMap("javascript")); // "javscript"
console.log(removeDuplicatesOneLiner("aabbccddeeff")); // "abcdef"
console.log(removeDuplicatesReduce("mississippi")); // "misp"
