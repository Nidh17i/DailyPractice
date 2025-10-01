// **1. Object Creation and Properties**

// Create an object `car` with properties:

// * `brand` = `"Toyota"`
// * `model` = `"Corolla"`
// * `year` = `2020`
// * `start` (method) → prints `"Car started"`

//  **Tasks:**

// * Access and print each property using dot notation.
// * Call the `start` method.

let car={
    brand:"Toyota",
    model:"Corolla",
    year:2020,
    start:function(){
        console.log("Car started");
    }

}
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.start());


// ### **2. Object Manipulation (Add, Update, Delete)**



// * Add a property `color = "blue"`.
car.color='blue';
console.log(car.color);

// * Update `year` to `2022`.
car.year=2022;
console.log(car.year);
console.log(car);

// * Delete `model`.
delete car.model;
console.log(car.model);


