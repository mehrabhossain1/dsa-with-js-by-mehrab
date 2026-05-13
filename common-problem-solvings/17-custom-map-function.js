/**
 * Problem 17: Implement Your Own map() Function
 * ---------------------------------------------
 * Create a custom map() function that mimics the behavior of the built-in
 * Array.prototype.map.
 *
 * Built-in signature:
 *   array.map(callback(currentValue, index, array), thisArg)
 *
 * Example:
 *   [1, 2, 3].map(x => x * 2)  -> [2, 4, 6]
 */

// Approach 1: Standalone function using a for loop
// Time: O(n), Space: O(n)
function myMap(arr, callback, thisArg) {
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            result[i] = callback.call(thisArg, arr[i], i, arr);
        }
    }
    return result;
}

// Approach 2: Extend Array.prototype (polyfill style)
// Time: O(n), Space: O(n)
if (!Array.prototype.myMapProto) {
    Array.prototype.myMapProto = function (callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        const result = new Array(this.length);
        for (let i = 0; i < this.length; i++) {
            if (i in this) {
                result[i] = callback.call(thisArg, this[i], i, this);
            }
        }
        return result;
    };
}

// Approach 3: Using reduce
// Time: O(n), Space: O(n)
function myMapReduce(arr, callback, thisArg) {
    return arr.reduce((acc, value, index, original) => {
        acc.push(callback.call(thisArg, value, index, original));
        return acc;
    }, []);
}

// Approach 4: Recursive implementation
// Time: O(n), Space: O(n)
function myMapRecursive(arr, callback, index = 0, result = []) {
    if (index >= arr.length) return result;
    result.push(callback(arr[index], index, arr));
    return myMapRecursive(arr, callback, index + 1, result);
}

// Approach 5: Using a generator
// Time: O(n), Space: O(n)
function* myMapGenerator(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        yield callback(arr[i], i, arr);
    }
}

console.log(myMap([1, 2, 3], (x) => x * 2)); // [2, 4, 6]
console.log([1, 2, 3].myMapProto((x) => x + 1)); // [2, 3, 4]
console.log(myMapReduce([1, 2, 3], (x, i) => x + i)); // [1, 3, 5]
console.log(myMapRecursive([10, 20, 30], (x) => x / 10)); // [1, 2, 3]
console.log([...myMapGenerator([1, 2, 3], (x) => x ** 2)]); // [1, 4, 9]

const context = { multiplier: 3 };
console.log(
    myMap(
        [1, 2, 3],
        function (x) {
            return x * this.multiplier;
        },
        context,
    ),
); // [3, 6, 9]
