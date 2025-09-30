// ## find
// Find the first number greater than 50 in [10, 20, 60, 40, 80].  
 let arr=[10, 20, 60, 40, 80];
 let a=arr.find(x=>x>50);
 console.log(a);
// Find the first word with more than 5 letters in ["cat", "elephant", "dog"].
let str=["cat", "elephant", "dog"];
let s=str.find(x=>x.length>5);
console.log(s);

// ### at
// Return the last element of [1, 2, 3, 4, 5] using .at(). 
 let b=[1,2,3,4,5];
 //console.log(b.at(a.length-1));
// Return the second-to-last element using .at().
//console.log(b.at(b.length-2));

// ### has (for Map/Set)
// Create a Set with ["apple", "banana", "mango"]. Check if "banana" exists. 

 let c=new Set(["apple","banana","mango"]);
 let ans=c.has("banana");
 console.log(ans);

// Create a Map with {id:1,name:"Alice"} and check if the key "name" exists.
 let map=new Map([["id",1],["name","Alice"]]);
 let m=map.has("name");
 console.log(m);

