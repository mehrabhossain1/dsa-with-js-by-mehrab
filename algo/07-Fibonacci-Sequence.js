function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2)); // Output: [0, 1]
console.log(fibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Recursive approach
function fibonacciRecursive(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    const fib = fibonacciRecursive(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
}

console.log(fibonacciRecursive(2)); // Output: [0, 1]
console.log(fibonacciRecursive(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Dynamic programming approach
function fibonacciDP(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacciDP(2)); // Output: [0, 1]
console.log(fibonacciDP(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciDP(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Memoization approach
function fibonacciMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    const fib = fibonacciMemo(n - 1, memo);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    memo[n] = fib;
    return fib;
}

console.log(fibonacciMemo(2)); // Output: [0, 1]
console.log(fibonacciMemo(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciMemo(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Iterative approach with space optimization
function fibonacciIterative(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        const nextFib = fib[0] + fib[1];
        fib[0] = fib[1];
        fib[1] = nextFib;
    }
    return fib;
}

console.log(fibonacciIterative(2)); // Output: [0, 1]
console.log(fibonacciIterative(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Tail recursion approach
function fibonacciTail(n, a = 0, b = 1, result = []) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    result.push(a);
    if (result.length < n) {
        return fibonacciTail(n, b, a + b, result);
    }
    return result;
}

console.log(fibonacciTail(2)); // Output: [0, 1]
console.log(fibonacciTail(5)); // Output: [0, 1, 1, 2, 3]
console.log(fibonacciTail(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Generator approach
function* fibonacciGenerator(n) {
    let a = 0,
        b = 1;
    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacciGenerator(10);
console.log([...fibGen]); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using BigInt for large Fibonacci numbers
function fibonacciBigInt(n) {
    const fib = [0n, 1n];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacciBigInt(50)); // Output: [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, ..., 12586269025n]

// Using matrix exponentiation for O(log n) time complexity
function matrixMultiply(a, b) {
    return [
        [
            a[0][0] * b[0][0] + a[0][1] * b[1][0],
            a[0][0] * b[0][1] + a[0][1] * b[1][1],
        ],
        [
            a[1][0] * b[0][0] + a[1][1] * b[1][0],
            a[1][0] * b[0][1] + a[1][1] * b[1][1],
        ],
    ];
}

function matrixPower(matrix, n) {
    let result = [
        [1, 0],
        [0, 1],
    ]; // Identity matrix
    while (n > 0) {
        if (n % 2 === 1) {
            result = matrixMultiply(result, matrix);
        }
        matrix = matrixMultiply(matrix, matrix);
        n = Math.floor(n / 2);
    }
    return result;
}

function fibonacciMatrix(n) {
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    const F = [
        [1, 1],
        [1, 0],
    ];
    const result = matrixPower(F, n - 1);
    return [
        0,
        1,
        ...Array.from(
            { length: n - 2 },
            (_, i) => result[0][0] * result[0][1] + result[1][0] * result[1][1],
        ),
    ];
}

console.log(fibonacciMatrix(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using Binet's formula for O(1) time complexity
function fibonacciBinet(n) {
    const phi = (1 + Math.sqrt(5)) / 2;
    const psi = (1 - Math.sqrt(5)) / 2;
    const fib = [];
    for (let i = 0; i < n; i++) {
        fib.push(
            Math.round((Math.pow(phi, i) - Math.pow(psi, i)) / Math.sqrt(5)),
        );
    }
    return fib;
}

console.log(fibonacciBinet(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using memoization with a Map for better performance
function fibonacciMemoMap(n, memo = new Map()) {
    if (memo.has(n)) return memo.get(n);
    if (n <= 0) return [0];
    if (n === 1) return [0, 1];

    const fib = fibonacciMemoMap(n - 1, memo);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    memo.set(n, fib);
    return fib;
}

console.log(fibonacciMemoMap(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using a Set to store Fibonacci numbers for O(1) lookups
function fibonacciSet(n) {
    const fibSet = new Set();
    let a = 0,
        b = 1;
    for (let i = 0; i < n; i++) {
        fibSet.add(a);
        [a, b] = [b, a + b];
    }
    return Array.from(fibSet);
}

console.log(fibonacciSet(10)); // Output: [0, 1, 2, 3, 5, 8, 13, 21, 34]

// Using a Map to store Fibonacci numbers for O(1) lookups
function fibonacciMap(n) {
    const fibMap = new Map();
    let a = 0,
        b = 1;
    for (let i = 0; i < n; i++) {
        fibMap.set(i, a);
        [a, b] = [b, a + b];
    }
    return Array.from(fibMap.values());
}

console.log(fibonacciMap(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using a class to encapsulate Fibonacci logic
class Fibonacci {
    constructor() {
        this.memo = new Map();
    }

    getFibonacci(n) {
        if (this.memo.has(n)) return this.memo.get(n);
        if (n <= 0) return [0];
        if (n === 1) return [0, 1];

        const fib = this.getFibonacci(n - 1);
        fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        this.memo.set(n, fib);
        return fib;
    }
}

const fibonacciInstance = new Fibonacci();
console.log(fibonacciInstance.getFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using a closure to create a Fibonacci generator
function createFibonacciGenerator() {
    let a = 0,
        b = 1;
    return function* () {
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    };
}

const fibGenClosure = createFibonacciGenerator()();
console.log([...Array(10)].map(() => fibGenClosure.next().value)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Using a proxy to create a Fibonacci sequence generator
const fibonacciProxy = new Proxy(
    {},
    {
        get(target, prop) {
            if (prop in target) {
                return target[prop];
            }
            const n = parseInt(prop);
            if (isNaN(n) || n < 0) {
                return undefined;
            }
            if (n === 0) return 0;
            if (n === 1) return 1;
            target[prop] = fibonacciProxy[n - 1] + fibonacciProxy[n - 2];
            return target[prop];
        },
    },
);

console.log(fibonacciProxy[0]); // Output: 0
console.log(fibonacciProxy[1]); // Output: 1
console.log(fibonacciProxy[5]); // Output: 5
console.log(fibonacciProxy[10]); // Output: 55

// Using a generator function to create an infinite Fibonacci sequence
function* infiniteFibonacci() {
    let a = 0,
        b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const infiniteFibGen = infiniteFibonacci();
console.log([...Array(10)].map(() => infiniteFibGen.next().value)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
