// ## Section C – Practical Coding Questions (40 Marks → 2 × 20 marks)



// **Time:** 60 minutes

// ### 1️⃣ DOM + Events + Objects (20 Marks)

// Build a small webpage that:

// * Has an input field for product name and price.
// * On clicking “Add Product”, add the data into a table below with two columns (Name & Price).
// * Each row should have a “Delete” button to remove that entry.
// * Maintain the data in an array and re-render when updated.

// **Marking Scheme:**


let first=document.getElementById('first');
let second=document.getElementById('second');
let btn=document.getElementById('btn');


btn.addEventListener('click',()=>{
    
    let data=div.createElement('div');
    first.innerText=data;
    second.innerText=data;





    


})


// * DOM selection & event binding → 5
// * Add row & delete row functionality → 10
// * Array data handling → 5

// ---



// ### 2️⃣ Async + Timers + Promises (20 Marks)

// Write a script that:

// * Logs “Start Process”
// * Uses `setTimeout` (2 s) to log “Timer Done”
// * Creates a Promise that resolves after 1 s with “Promise Resolved”
// * Fetches `https://jsonplaceholder.typicode.com/comments/1` and logs `email`
// * Logs “End Process” immediately after the synchronous code

console.log('start Process');
setTimeout(()=>{
 console.log('Timer Done');
    },2000);
 let promise= new Promise((res , rej)=>{
        setTimeout(()=>{
            res('Promise Resolve');
        },1000)
    })
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));

async function FetchData(){
    try{
       let res=await fetch(`https://jsonplaceholder.typicode.com/comments/1`);
        let data= await res.json();
        console.log(data.email);
         }
         catch(err){
         return 'Unable to fetch data';
     }
     }
     FetchData().then((msg)=>console.log(msg))
     
 console.log('end');


// **Expected Console Order:**

// ```
// Start Process
// End Process
// Promise Resolved
// [email from API]
// Timer Done
// ```




// **Marking Scheme:**

// * Correct execution order → 10
// * Proper use of Promise, setTimeout, and async/await → 5
// * Fetch with error handling → 5