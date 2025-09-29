
// Q:1
//1. Print names of students who scored more than 50
const students = [
  { name: "Alice", marks: 40 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 80 }
];

for(let i=0;i<students.length;i++){
    if(students[i].marks>50){
        console.log(students[i].name);
    }
}
// 2. Use a do...while loop to keep adding 5 to a score until it reaches 100


for(let i=0;i<students.length;i++){
let value=students[i].marks;

do{
    value=value+5;
    
}while(value<100);
console.log(students[i].name,value);
}

               // Question 2

/*{
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); 
console.log(b); 
console.log(c);*/


// 1.  Which variables are accessible outside the block? Why?

/* ans. Var variable is accessible outside the block, Beacuse it 
is a function level scope /Global scope so accessible outside the 
block without error. and let and const show reference error.*/

// 2. Rewrite the code so that all three variables can be used outside the block without errors.
 
var a=10;
let b=20;
const c=30;
{

}
console.log(a);
console.log(b);
console.log(c);

                // Question 3

// 1. What will each line output?

/*let x = 7;
let y = 3;
console.log(x % y); //1   
console.log(x > y && y > 0);  // true
console.log(x < y || y > 0);  //true
console.log(!(x === y)); */




// 2.  Explain the difference between `&&` and `||`.
/*Ans: '&&' is a 'and operator',it is check a both condition 
       if both condition is true then it's give a true value 
       otherwise false.
       '||'is 'OR operator', it is check  first, first condition
       if first condition is true then return true not check second 
       value , else first condition is false then check second condition
       ,it true then return true otherwise return false;*/

          
//3.   Why does `!(x === y)` return true here?
/*Ans:*/


               // Question 4

/*const nums = [2, 4, 6, 8, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] * 2);
}
*/


//1.   What numbers will be printed?
//Ans. [4,8,12,16,20]
//2.   Rewrite the loop so it prints only odd numbers from 1 to 10.
       
       for(let i=0;i<=10;i++){
        if(i%2!=0){
            console.log(i);
        }
       }
 
                   //Question 5
                   

/*let n = 1;
do {
  console.log("Number:", n);
  n++;
} while (n <= 5)*/


//1.   How many times will "Number:" be printed?
//Ans. 5
//2.   Change the condition so that the loop always runs at least once, even if `n` starts from 10.
//ANs. 
     let n=10;
     do{
        console.log(n);
        n++;
     }while(n<=5);


              // Question 6


const text = "Hello World";
console.log(text.charAt(0));     
console.log(text[6]);           
console.log(text.substring(0, 5));
console.log(text.slice(0, 5));  
console.log(text.split(" ")); 
  
console.log(`Message: ${text}`);  



//1    What does `charAt(0)` return? 
//Ans. H
//2    What’s the difference between `substring` and `slice`?
/*Ans: Difference 'substring' and 'slice' is substring not understand the
       negative indexing and slice treat negative indexing as negative and substring 
       treat negative value like 0;

//3    What will `split(" ")` return?
//Ans  ['Hello','World']

//4    Explain how string interpolation (using backticks `` ` ``) works*/
/*Ans  Template literals use ${} to embed expressions in strings, automatically
        converting values to strings and supporting multi-line text.*/

        //Question 7

//1. Loop numbers 1 to 20.
  let i=1;
  while(i<=20){
    console.log(i);
    i++;
  } 

/*2 Print `"Fizz"` for multiples of 3, `"Buzz"` for multiples of 
    5, `"FizzBuzz"`for multiples of both, else the number.*/
 

for(let a=1;a<=20;a++){
    if(a%3==0 && a%5==0){
        console.log("FizzBuzz");
    }
    else if(a%5==0){
        console.log("Buzz");
    }
    else if(a%3==0){
        console.log("Fizz");
    }
    else{
        console.log(a);
    }
}
    


/**Bonus:** Multiplication Table of any number using `for...in`  
Example (for 5):  
```
5 x 1 = 5  
5 x 2 = 10  
...  
5 x 10 = 50*/

let number=5;
let value=[1,2,3,4,5,6,7,8,9,10];
for(let i in value){
    console.log(`${number} * ${value[i]} = ${number*value[i]}`);
}

            // Question 8
            
// 1What will each line output?
/*
console.log(1 + "2");     //12
console.log("2" * 3);     //6
console.log(0 == false);  // true
console.log(0 === false); // false
console.log([] == false); // true
console.log([] === false); // false

const num = 5;
const str = "5";
console.log(num == str);  // True
console.log(num === str); // false
console.log(`${num + 5} is greater than ${str}`);   //10 is greater than 5

/*-   Which comparisons use type coercion and which don’t?
//ans avoid type coercion by using === and !== to write safer and more predictable code.


//    Why does `==` behave differently from `===`?
//ans == is loose equality – it performs type coercion before comparing.
      === is strict equality – it compares value and type without coercion.

//     In the last line, how does string interpolation handle numbers inside `${}`?*/

/*ans  automatically convert a string

           // Question 9
  


let x1 = 5;
let y1 = "5";

console.log(x1 == y1);  // true
console.log(x1 === y1);  // false
console.log(x1 != y1);  // false
console.log(x1 !== y1); // true
console.log(x1 > 3);    // true
console.log(x1 < 10);   // false
console.log(x1 >= 5);   //true
console.log(x1 <= 4);   // false

// Question 10
sayHello();
console.log(x);
function sayHello() {
  console.log("Hello!");
}

var x = 5;
let y = 10;



// What happens with `sayHello()`?
// print sayHello;
// What gets logged for `x`?
// undefined
// What if you also add `console.log(y)` before declaration?
//  give the error*/
