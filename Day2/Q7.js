// ### flat
// Flatten the array [1, [2, 3], [4, [5, 6]]] just one level deep.  
 let arr=[1, [2, 3], [4, [5, 6]]];
 let array=arr.flat();
 console.log(array);
// Fully flatten [1, [2, [3, [4]]]].
let r=[1, [2, [3, [4]]]];
let f=r.flat(3);
console.log(f);


// ### sort
// Sort [40, 100, 1, 5, 25, 10] in ascending order. 

let a=[40, 100, 1, 5, 25, 10];
let ans=a.sort((a,b)=>a-b);
console.log(ans);
// Sort ["banana", "apple", "cherry"] alphabetically.
let b=["banana", "apple", "cherry"];
let sort=b.sort();
console.log(sort);

// ### reverse
// Reverse [1,2,3,4,5].  
let y=[1,2,3,4,5];
console.log(y.reverse());
// Reverse the characters of "hello" using split, reverse, and join.
 let str="hello";
 let rev=str.split("").reverse().join("");
 console.log(rev);
