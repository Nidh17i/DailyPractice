
// 5. Object Destructuring**

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: { city: "New York", zip: 10001 }
};
// * Extract `name` and `email` into variables.

let {name,email}=user;
console.log(name);
console.log(email);

// * Extract `city` into a variable using **nested destructuring**.
let {address:{city,zip}}=user;
console.log(city);



// ### **6. Spread & Rest Operators**

// * Create a new object `newUser` by copying all properties of `user` and adding a new property `role = "admin"`.
let newUser={...user,role:'Admin'};
console.log(newUser);

// * Write a function `sum(...numbers)` that accepts any number of arguments and returns their sum.
function sum(...number){
   console.log( number.reduce((acc,curr)=>acc+curr,0));

}
sum(1,2,3,4,5);


// ### **7. Template Literals**

// Using the `person` object, print:

function person(firstName,lastName,age){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age,
    this.getFullName=function(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}and I am ${this.age} years old`);

    };

    }
    let p1=new person("Nidhi","Darwade",23);
    p1.getFullName();
//  `"Hello, my name is John Doe and I am 25 years old."`

// (use template literals and `getFullName()` method).



// ### **8. Default Parameters**

// Write a function `greet(name = "Guest")` that prints:
//  `"Hello, <name>!"`


function greet(name="Guest"){
    console.log(`Hello, ${name}!`);

}
greet();
greet("Nidhi")
// Example:

// ```js
// greet();        // "Hello, Guest!"
// greet("Nitin"); // "Hello, Nitin!"
// ```

// ---