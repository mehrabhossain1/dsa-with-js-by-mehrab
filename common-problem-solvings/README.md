# Common Problem Solvings

A curated collection of **20 classic problem-solving questions** solved in JavaScript.

These are the kinds of problems that come up again and again in technical interviews, coding challenges, and day-to-day frontend/backend work. Each file contains **multiple approaches** to the same problem so you can compare trade-offs in time complexity, space complexity, and readability.

---

## What's Inside

Every problem in this folder includes:

- A clear **problem statement** at the top of the file
- **Examples** for inputs and expected outputs
- **Multiple solutions** — from brute force to optimized
- **Time and space complexity** noted on each approach
- Runnable `console.log` examples so you can `node <file>.js` and see it work

---

## Problem Index

| #   | Problem                                            | File                                                                                                       | Key Concepts                          |
| --- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| 01  | Reverse Words in a Sentence                        | [01-reverse-words-in-sentence.js](./01-reverse-words-in-sentence.js)                                       | Strings, two-pointers                 |
| 02  | Find All Pairs With a Given Sum                    | [02-find-all-pairs-with-given-sum.js](./02-find-all-pairs-with-given-sum.js)                               | Hash set, two-pointers                |
| 03  | Check if an Array is a Palindrome                  | [03-check-array-palindrome.js](./03-check-array-palindrome.js)                                             | Two-pointers, recursion               |
| 04  | Rotate a Matrix 90° Clockwise                      | [04-rotate-matrix-90-clockwise.js](./04-rotate-matrix-90-clockwise.js)                                     | Matrix, transpose                     |
| 05  | Remove Duplicate Characters From a String          | [05-remove-duplicates-from-string.js](./05-remove-duplicates-from-string.js)                               | Set, hashing                          |
| 06  | Longest Increasing Subsequence                     | [06-longest-increasing-subsequence.js](./06-longest-increasing-subsequence.js)                             | Dynamic programming, binary search    |
| 07  | Count the Number of Vowels in a String             | [07-count-vowels-in-string.js](./07-count-vowels-in-string.js)                                             | Strings, regex                        |
| 08  | Find the Majority Element                          | [08-find-majority-element.js](./08-find-majority-element.js)                                               | Boyer-Moore, divide & conquer         |
| 09  | Rotate a String by k Positions                     | [09-rotate-string-by-k-positions.js](./09-rotate-string-by-k-positions.js)                                 | Strings, modulo math                  |
| 10  | Find Missing Elements in a Consecutive Sequence    | [10-find-missing-elements-in-consecutive-sequence.js](./10-find-missing-elements-in-consecutive-sequence.js) | Hash set, sorting                     |
| 11  | Rotate an Array by k Positions                     | [11-rotate-array-by-k-positions.js](./11-rotate-array-by-k-positions.js)                                   | Reversal trick, in-place              |
| 12  | Find the Missing Number in an Array                | [12-find-missing-number-in-array.js](./12-find-missing-number-in-array.js)                                 | Math, XOR, binary search              |
| 13  | Merge Two Sorted Arrays                            | [13-merge-two-sorted-arrays.js](./13-merge-two-sorted-arrays.js)                                           | Two-pointers, merge sort              |
| 14  | Longest Substring Without Repeating Characters     | [14-longest-substring-without-repeating-characters.js](./14-longest-substring-without-repeating-characters.js) | Sliding window, hashing               |
| 15  | Check if Two Arrays are Equal                      | [15-check-arrays-equal.js](./15-check-arrays-equal.js)                                                     | Frequency map, sorting                |
| 16  | Move All Zeros to the End of an Array              | [16-move-zeros-to-end.js](./16-move-zeros-to-end.js)                                                       | Two-pointers, in-place                |
| 17  | Implement Your Own `map()` Function                | [17-custom-map-function.js](./17-custom-map-function.js)                                                   | Prototypes, higher-order functions    |
| 18  | Find the Intersection of Two Arrays                | [18-intersection-of-two-arrays.js](./18-intersection-of-two-arrays.js)                                     | Set, two-pointers, frequency map      |
| 19  | First Non-Repeating Character in a String          | [19-first-non-repeating-character.js](./19-first-non-repeating-character.js)                               | Frequency map, single-pass            |
| 20  | Check if a Number is a Perfect Square (no sqrt)    | [20-check-perfect-square-without-sqrt.js](./20-check-perfect-square-without-sqrt.js)                       | Binary search, Newton's method        |

---

## How to Run

Each file is a self-contained Node.js script. Run any of them with:

```bash
node 01-reverse-words-in-sentence.js
```

No dependencies, no setup — just plain JavaScript.

---

## How This Repo Helps You

### 1. **Learn patterns, not memorize answers**

These 20 problems intentionally cover the **most common patterns** you will see across interviews and real-world code:

- Two-pointer technique
- Sliding window
- Frequency maps / hashing
- Binary search
- Dynamic programming
- In-place mutation
- Divide and conquer
- Math-based tricks (XOR, modulo, Gauss sum)

Recognize the pattern → recognize the solution.

### 2. **Compare multiple approaches side-by-side**

Every file ships with **3–5 different solutions** ranging from naive to optimal. This is the fastest way to develop intuition for **why** the optimized solution works, not just **how**.

For example, in `08-find-majority-element.js` you'll see:

- O(n²) brute force
- O(n log n) sort-based
- O(n) hash map
- O(n) with O(1) space (Boyer-Moore voting)

Same problem, four levels of thinking.

### 3. **Beginner-friendly, but interview-grade**

Code is written to be **readable first**, with clear variable names and comments only where they add value. No clever one-liners that obscure the logic — but where elegant solutions exist, they're included.

### 4. **A reference you can return to**

Stuck on a problem? Search the patterns table above. Each solution is small enough to read in a minute and copy-adapt to your own use case.

### 5. **Great for**

- Frontend / fullstack developers brushing up on DSA
- Anyone preparing for technical interviews
- Self-taught learners building problem-solving intuition
- Teachers / mentors looking for clean reference implementations

---

## Suggested Learning Flow

1. **Read the problem statement** at the top of a file
2. **Try to solve it yourself first** (even just on paper)
3. **Read approach 1** — usually the most intuitive
4. **Then read the optimized approach** and ask: _why_ is this better?
5. **Run the file** with `node <file>.js` to verify the outputs
6. **Move to the next problem**, looking for repeated patterns

---

## Contributing / Feedback

This folder is part of a larger learning journey ([see the root README](../README.md)).

If you spot a bug, know a cleaner approach, or want to suggest a new problem — feel free to open an issue or PR. Learning together makes everyone sharper.

---

> _"Don't memorize — internalize. The pattern is the lesson."_
