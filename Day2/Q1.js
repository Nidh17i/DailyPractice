// filter


//From an array of numbers [12, 5, 8, 130, 44], return only the numbers greater than 10. 

let arr=[12,5,8,130,44];
let f=arr.filter(x=>x>10);
console.log(f);

//From an array of words ["cat", "elephant", "dog", "tiger"], filter out words shorter than 4 letters.

let brr=["cat", "elephant", "dog", "tiger"];
let s=brr.filter(x=>x.length<4)
console.log(s);