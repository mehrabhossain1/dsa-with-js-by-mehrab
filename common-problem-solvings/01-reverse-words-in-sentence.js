/**
 * Problem 01: Reverse Words in a Sentence
 * ---------------------------------------
 * Reverse the order of words in a string while keeping the words themselves intact.
 *
 * Example:
 *   Input:  "Hello World"
 *   Output: "World Hello"
 *
 *   Input:  "I love JavaScript"
 *   Output: "JavaScript love I"
 */

// Approach 1: Using built-in split/reverse/join
// Time: O(n), Space: O(n)
function reverseWordsBuiltIn(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

// Approach 2: Manual two-pointer approach (no reverse())
// Time: O(n), Space: O(n)
function reverseWordsManual(sentence) {
    const words = sentence.split(" ");
    let left = 0;
    let right = words.length - 1;

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }
    return words.join(" ");
}

// Approach 3: Without using split() — traverse characters manually
// Time: O(n), Space: O(n)
function reverseWordsCharByChar(sentence) {
    const result = [];
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === " ") {
            if (word) result.unshift(word);
            word = "";
        } else {
            word += sentence[i];
        }
    }
    if (word) result.unshift(word);

    return result.join(" ");
}

// Approach 4: Handle multiple spaces gracefully (trim + collapse)
// Time: O(n), Space: O(n)
function reverseWordsClean(sentence) {
    return sentence.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWordsBuiltIn("Hello World")); // "World Hello"
console.log(reverseWordsManual("I love JavaScript")); // "JavaScript love I"
console.log(reverseWordsCharByChar("The quick brown fox")); // "fox brown quick The"
console.log(reverseWordsClean("   Hello    World   ")); // "World Hello"
