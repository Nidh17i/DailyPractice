
// 1️⃣ Simple Async Function
// 📝 **Task:**  
// Write an async function that waits for 2 seconds and returns `"Completed"`.  
// Call it and print the output.

const { clearScreenDown } = require("readline");

// 💡 **Expected Output:**
// ```

// Completed

// async function Task(){
//     let wait=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('Complted');

//         },2000)
//     })
//     return wait;

// }
// Task().then((msg)=>console.log(msg))
// .catch((err)=>console.log(err));

// ### 2️⃣ Async Sequence
// 📝 **Task:**  
// Create async functions:
// - `fetchData()` → logs `"Fetching data..."`
// - `processData()` → logs `"Processing data..."`
// - `saveData()` → logs `"Saving data..."`

// Call them **in order** using `await`.

// // 💡 **Expected Output:*

// Fetching data...
// Processing data...
// Saving data...

async function fetchData(){
    let f1=await new Promise((res,rej)=>{
      setTimeout(()=>{
        res("Fetching Data...")
      },500)
    })
    return f1
}
async function ProcessData(){
    let f1=await new Promise((res,rej)=>{
      setTimeout(()=>{
        res("Processing Data...")
      },1000)
    })
    return f1
}
async function SaveData(){
    let f1=await new Promise((res,rej)=>{
      setTimeout(()=>{
        res("Saving Data...")
      },2000)
    })
    return f1
}

// fetchData().then((msg)=>console.log(msg));
// ProcessData().then((msg)=>console.log(msg));
// SaveData().then((msg)=>console.log(msg));

// async function runTask(){
//     let r1= await fetchData();
//     console.log(r1);
//     let r2=await ProcessData();
//     console.log(r2);
//     let r3=await SaveData();
//     console.log(r3);

// }
// runTask();

// ### 3️⃣ Try-Catch Handling
// 📝 **Task:**  
// Inside an async function, simulate a rejected promise and handle it with `try...catch`.
// Expected Output:**

// Error: Something went wrong!

async function sum(a,b){
    try{
    let p= await new Promise((res,rej)=>{
        if(a+b>10){
            res('I am greater then 10')
            
        }
        else{
            rej('I am less')
            
        }
    })
    return p;
    
    }

catch(err){
    return err;
    
}
}

sum(6,1).then((msg)=>console.log(msg))
.catch((err)=>console.log(err));


