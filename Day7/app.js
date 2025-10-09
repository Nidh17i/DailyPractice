
/*📌 Part 1: Event Loop & Execution Order

1.  Predict the output of the following code **before running it**:

``` js
console.log('1');

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve().then(() => console.log('promise 1'));

console.log('2');

setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve().then(() => console.log('promise 2'));

console.log('3');
```

-Question: Why do promises run before `setTimeout`?*/

console.log('1');

setTimeout(() => console.log('timeout 1'), 0);

Promise.resolve().then(() => console.log('promise 1'));

console.log('2');

setTimeout(() => console.log('timeout 2'), 0);

Promise.resolve().then(() => console.log('promise 2'));

console.log('3');

//ans:- 1/2/3/promise1/promise2/timeout1/timeout2
//ans:- promise run in microtask queue,priority higher then setTimeout in event loop


/*2.  Analyze this code and explain the exact order of execution:

 js
async function test() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
test();
console.log('C');
```

-   Question: What happens inside the **microtask queue** when `await`
    is used?*/

    async function test() {
  console.log('A');
  await Promise.resolve();
  console.log('B');
}
test();
console.log('C');

//order:- A->C->B
// await is used pause the execution and rest(console.log('B')goes to microTask queue;


/*## 📌 Part 2: Timers & Blocking

1.  Run this code and measure the delay:

``` js
console.time('timer');
setTimeout(() => {
  console.timeEnd('timer');
}, 2000);

for (let i = 0; i < 1e9; i++) {} // heavy loop
```

-   Question: Why does the `setTimeout` callback run **later than 2s**?
*/

/*ans:- SetTimeout->MacroTask Queue ,for loop-> call stack run 1e9 time(long time) that's why
setTimeout later than 2s*/


/*Part 3: Callbacks vs Promises vs Async/Await

1.  Write the same logic in 3 different ways:
    -   Using `setTimeout(callback)`
    -   Using `Promise.then`
    -   Using `async/await`

Logic: Wait for 2 seconds, then print `"Done!"`.*/


setTimeout(()=>{
    console.log("Done!");
},2000);














