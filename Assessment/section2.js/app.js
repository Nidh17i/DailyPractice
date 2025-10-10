// ## Section B – Short Code Questions (30 Marks → 6 × 5 marks)

// **Time:** 35 minutes

// 1. **Conditional Statement**
//    Write a function `temperatureCheck(temp)` that logs:

// * "Too Cold" if temp < 10
// * "Pleasant" if 10–30
// * "Hot" if > 30


function temperatureCheck(temp){
    if(temp<10){
        console.log('Too Cold');
    }else if(temp<=30){
        console.log("Pleasant");
    }else{
        console.log("Hot");
    }
}
temperatureCheck(5);
temperatureCheck(11);
temperatureCheck(31);

// 2. **Array Loop & Map**
//    Write a function that doubles every number in an array 
// using `map` and returns a new array.

function doublesNo(){
    let arr=[10,20,30,40,50];
     let n= arr.map(x=>x*2);
     console.log(n);
    

}
doublesNo();



// 3. **Object Destructuring & Template Literals**

// ```js
// const user = { name: "Rahul", city: "Pune" };
// // Expected log: "Rahul lives in Pune"
const user={name:'Rahul',city:'pune'};
const{name,city}=user;
console.log(`${name} lives in ${city}`);

// 4. **DOM Manipulation**
//    Select a button `#changeColor` and a div `#box`.
//    When the button is clicked, change the div’s background color to blue.

// let btn=document.querySelector('#changeColor');
// let box=document.querySelector('#box');

// btn.addEventListener('click',()=>{
//     box.style.backgroundColor='blue';
// })
// 5. **Array Methods**
//    Given:
// const scores = [45, 72, 88, 30, 95];
// ```

// * Use `filter()` to get scores ≥ 50.
// * Use `reduce()` to calculate the total score.

const scores = [45, 72, 88, 30, 95];

let score=scores.filter(x=>x>=50);
console.log(score);

let total=score.reduce((acc,curr)=>acc+curr,0);
console.log(total);

// 6. **Async/Await + Error Handling**
//    Fetch `https://jsonplaceholder.typicode.com/todos/1` and log `title`.
//    If request fails, print `"Unable to fetch data"`.

let f=async function fetchData(){
    try{
    let res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data=res.json();
    console.log(data);
    }
    catch(err){
        return 'Unable to fetch data';
    }
}
f().then((msg)=>console.log(msg))
.catch((err)=>console.log(err));
