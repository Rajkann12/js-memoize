const memoize = (cb) => {
    const cache = new Map(); // Use Map for better handling of complex keys

    return function (...args) {
        const key = JSON.stringify(args); // Serialize arguments as the key
        if (cache.has(key)) {
            console.log('from memo');
            return cache.get(key);
        }

        console.log('calculating');
        const result = cb(...args); // Call the callback with all arguments
        cache.set(key, result); // Store the result in the cache
        return result;
    };
};

// Example Usage:
function calculate(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const efficientFunction = memoize(calculate);

console.time();
console.log(calculate(5)); // calculating -> 15
console.timeEnd();

console.time();
console.log(efficientFunction(5)); // 1st calculating -> 15
console.timeEnd();

console.time();
console.log(efficientFunction(5)); // from memo -> 15
console.timeEnd();
