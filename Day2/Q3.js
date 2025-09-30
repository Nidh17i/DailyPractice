// ### reduce
// Find the sum of numbers in [3, 7, 2, 9].  

let arr=[3,7,2,9];
let r=arr.reduce((acc ,curr)=>acc+curr,0);
console.log(r);
// Find the product of all numbers in [2, 3, 4]. 
let a=[2,3,4];
let n=a.reduce((acc,curr)=>acc*curr,1);
console.log(n);

// Count how many times each word appears in ["apple", "banana", "apple", "orange", "banana", "apple"].
 let s=["apple", "banana", "apple", "orange", "banana", "apple"];
 let ans=s.reduce((acc,curr)=>{
    acc.push(curr.length)
    return acc
 },[]);
 console.log(ans);
 
