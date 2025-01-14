#Memoization Utility in JavaScript

- This project implements a generic memoize function in JavaScript that optimizes computational functions by caching results of previous executions. This technique improves performance for functions that are called repeatedly with the same inputs.

##How It Works

- Cache Initialization: A Map object is used to store cached results.

- Key Generation: Arguments passed to the function are serialized using JSON.stringify to create a unique key.

- Cache Check: Before executing the callback, the function checks if the key exists in the cache.

    If the key exists, the cached value is returned.

    Otherwise, the callback is executed, and the result is stored in the cache.

- Return Value: The function returns either the cached value or the newly computed result.

##Note

    output:
    15
    default: 6.213ms
    calculating
    15
    default: 0.88ms
    from memo
    15
    default: 0.339ms

Sometimes you can see 2nd time calculated results are faster than memized values that is due to follow reason

- Warm-Up Phase:

The JavaScript engine (e.g., V8 in Chrome/Node.js) uses Just-In-Time (JIT) compilation to optimize code. During the first execution of calulate(5), the engine is still interpreting the code and gathering information about it. It hasn't had enough runtime data to apply optimizations yet.
This is why the initial call to calulate(5) takes longer—it’s not fully optimized.

- Subsequent Calls Benefit from Optimization:

After the first execution, the engine identifies frequently executed code and optimizes it. By the time effcientFunction(5) is called, the calulate function has been optimized, making its execution faster—even when it’s being executed as part of the memoized function.