// SECTION 1 — CALLBACKS

/*1️⃣ Basic Callback Example
📝 **Task: 
Create a function `doTask(callback)` that prints 
`"Task started"`, waits for 2 seconds, and then calls `callback()` which prints `"Task finished"`.

💡 **Expected Output:**
```
Task started
Task finished*/


// function task(){
//     console.log("Task finished")
// }
// function doTask(callback){
//     console.log('task started')
//     setTimeout(callback,2000);
// }

// doTask(task);
/*
2️Callback Chain Example
📝 **Task:**  
Simulate three async operations using `setTimeout()`:
- `readData()` → prints `"Reading data..."`
- `processData()` → prints `"Processing data..."`
- `saveData()` → prints `"Saving data..."`

Use **nested callbacks** to ensure they run one after another (in order).

💡 **Expected Output:**
```

Reading data...
Processing data...
Saving data...
*/


function readData(callback){
    setTimeout(()=>{
        console.log("Reading data...");
    },500);
    callback();

}
function processData(callback){
    setTimeout(()=>{
        console.log("Processing data...");
    },2000);
    callback();
}
function saveData(){
    setTimeout(()=>{
        console.log("Saving data...")
    },3000);
}

readData(()=>{
    processData(()=>{
        saveData(()=>{

        })
    })
})

// 3️⃣ Callback Error Example
// 📝 **Task:**  
// Modify the above so that `processData()` sometimes fails and calls an `onError` callback that prints `"Error: Failed to process data"`.

// 💡 **Expected Output:**
// ```

// Reading data...
// Error: Failed to process data

