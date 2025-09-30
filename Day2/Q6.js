// ### shift and unshift
// Remove the first element from ["red", "green", "blue"]. 

let a=["red", "green", "blue"];
a.shift();
console.log(a);
// Add "yellow" to the beginning of ["apple", "banana"].
let b=["apple","banana"];
b.unshift("Yellow");
console.log(b);


// ### push and pop
// Add "grapes" to the end of ["apple", "banana"]. 
let c=["apple","banana"];
c.push("grapes") ;
console.log(c);
// Remove the last element of ["pen", "pencil", "eraser"].

let d=["pen", "pencil", "eraser"];
d.pop();
console.log(d);
// ### length
// Find the length of ["java", "python", "js", "c++"]. 
let e=["java", "python", "js", "c++"];
console.log(e.length);

// Use .length to get the last element of [100,200,300,400].
let f=[100,200,300,400];
console.log(f[f.length-1]);


// ### indexOf
// From ["dog", "cat", "rabbit", "dog"], find the first occurrence index of "dog".  
  let g=["dog", "cat", "rabbit", "dog"];
  console.log(g.indexOf("dog"));

// Check what index "lion" would return in the same array.
console.log(g.indexOf("lion"));

// ### includes
// Check if "apple" exists inside ["banana", "mango", "grapes"]. 
let h=["banana", "mango", "grapes"];
console.log(h.includes("apple"));

// Check if "zebra" exists inside [1,2,3,4,5].
let j=[1,2,3,4,5];
console.log(j.includes("zebra"));
