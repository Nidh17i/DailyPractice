// 1️⃣ Simple Promise
// 📝 **Task:**  
// Create a Promise that waits for 2 seconds and then resolves with `"Data loaded successfully"`.  
// Use `.then()` to print the result.



// **Expected Output:**
// ```
// Data loaded successfully->Data loaded successfully

// let promise=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('Data loaded successfully')
//     },2000);

// })
//  promise
//  .then((msg)=>console.log(msg))
//  .catch((err)=>console.log(err));

//  ## 2️⃣ Promise Chain
// 📝 **Task:**  
// Chain multiple `.then()` calls:
// - Start with `"Data"`
// - Add `" loaded"` in next `.then()`
// - Add `" successfully"` in the next

// 💡 **Expected Output:**
// ```

// Data loaded successfully

// let promise1=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("data ");
//     },2000);

// })

// promise1.then((msg)=>{
//     return msg;
// })
// .then((msg)=>{
//     return msg+" loaded";
// })
// .then((msg)=>{
//     console.log(msg+" sucessfully");
    
// })

// Create a Promise that randomly either resolves with `"Success!"` or rejects with `"Error!"`.  
// Handle both using `.then()` and `.catch()`.

// let promise=new Promise((res,rej)=>{
//     let sucess=Math.floor(Math.random()*3);

//     if(sucess%2==0){
//         res("sucess");
//     }
//     else{
//     rej("failure");
//     }
// })
// promise.then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// Create three promises that resolve after different times (1s, 2s, 3s).  
// Use `Promise.all()` and `Promise.race()` to print results.

// 💡 **Expected Output (for Promise.all):**
// ```

// ["First Done", "Second Done", "Third Done"]
//  **Expected Output (for Promise.race):**
// First Done

let promise1=new Promise((res,req)=>{
    setTimeout(()=>{
        res('First Done');
    },1000);
})
let promise2=new Promise((res,req)=>{
    setTimeout(()=>{
        res('Second Done');
    },2000);
})
let promise3=new Promise((res,req)=>{
    setTimeout(()=>{
        res('Third Done');
    },3000);
})

Promise.all([promise1,promise2,promise3])
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));

Promise.race([promise1,promise2,promise3])
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));