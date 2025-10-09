// 1️⃣ Simple Promise
// 📝 **Task:**  
// Create a Promise that waits for 2 seconds and then resolves with `"Data loaded successfully"`.  
// Use `.then()` to print the result.



// **Expected Output:**
// ```
// Data loaded successfully->Data loaded successfully

let promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Data loaded successfully')
    },2000);

})
 promise
 .then((msg)=>console.log(msg))
 .catch((err)=>console.log(err));

//  ## 2️⃣ Promise Chain
// 📝 **Task:**  
// Chain multiple `.then()` calls:
// - Start with `"Data"`
// - Add `" loaded"` in next `.then()`
// - Add `" successfully"` in the next

// 💡 **Expected Output:**
// ```

// Data loaded successfully

