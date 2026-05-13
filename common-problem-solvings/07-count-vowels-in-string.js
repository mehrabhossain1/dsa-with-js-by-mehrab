/**
 * Problem 07: Count the Number of Vowels in a String
 * --------------------------------------------------
 * Count all vowels (a, e, i, o, u) in a given string.
 * Case-insensitive.
 *
 * Example:
 *   "Hello World"  -> 3   (e, o, o)
 *   "JavaScript"   -> 3   (a, a, i)
 */

// Approach 1: Simple loop with a Set
// Time: O(n), Space: O(1)
function countVowelsLoop(str) {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (vowels.has(char)) count++;
    }
    return count;
}

// Approach 2: Using regex
// Time: O(n), Space: O(n) for match array
function countVowelsRegex(str) {
    const match = str.match(/[aeiou]/gi);
    return match ? match.length : 0;
}

// Approach 3: Using filter + array
// Time: O(n), Space: O(n)
function countVowelsFilter(str) {
    return str
        .toLowerCase()
        .split("")
        .filter((c) => "aeiou".includes(c)).length;
}

// Approach 4: Using reduce
// Time: O(n), Space: O(1)
function countVowelsReduce(str) {
    return str
        .toLowerCase()
        .split("")
        .reduce((acc, c) => acc + ("aeiou".includes(c) ? 1 : 0), 0);
}

// Approach 5: Return a breakdown of each vowel count
// Time: O(n), Space: O(1)
function countVowelsBreakdown(str) {
    const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for (const char of str.toLowerCase()) {
        if (char in counts) counts[char]++;
    }
    return counts;
}

console.log(countVowelsLoop("Hello World")); // 3
console.log(countVowelsRegex("JavaScript")); // 3
console.log(countVowelsFilter("AEIOU and aeiou")); // 10
console.log(countVowelsReduce("rhythm")); // 0
console.log(countVowelsBreakdown("Education")); // { a: 1, e: 1, i: 1, o: 1, u: 1 }
