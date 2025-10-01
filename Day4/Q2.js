// ### **3. Iterating Over Objects**

// Create an object `student` with properties:


 const student = { name: "Alice", age: 22, grade: "A" };

//  **Tasks:**

// * Use **for…in** to print all keys.

for(key in student){
    console.log(`${key}`);
}
// * Use `Object.values()` to print all values.

console.log(Object.values(student));


// * Use `Object.entries()` with **for…of** loop to print key-value pairs.

for([key,value]of Object.entries(student)){
     console.log(`${key} : ${value}`);
}

//4. Using `this` in Object Methods**

// Create an object `person` with properties:

// * `firstName`, `lastName`, `age`

function person(firstName,lastName,age){
    this.firstName=firstName,
    this.lastName=lastName,
    this.age=age,
    this.getFullName=function(){
        console.log(`${this.firstName} ${this.lastName}`);

    };

    }
    let p1=new person("Nidhi","Darwade",23);
    p1.getFullName();

// * Method `getFullName()` → returns full name using `this`.

// 👉 Example Output:

// ```js
// console.log(person.getFullName()); // "John Doe"
