// ##  (Combine Multiple Methods)
// Take an array of student marks [45, 67, 89, 34, 56].  
//   1. Filter students who scored above 50.  

let arr=[45,67,89,34,56];
let a=arr.filter(x=>x>50);
console.log(a);
//   2. Sort them in descending order.  
let sort=arr.sort((a,b)=>b-a);
console.log(sort);
//   3. Find the average marks. 
let reduce=arr.reduce((acc,curr)=>curr+acc,0);
let average=reduce/2;
console.log(average);

