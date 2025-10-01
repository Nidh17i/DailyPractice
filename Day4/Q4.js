// ### **9. Class Introduction**

// Create a class `Animal` with:

// * property: `name` (from constructor)
// * method: `speak()` → prints `"<name> makes a sound"`
// ### **10. Class with Methods & Default Params**
// Extend `Animal` class to `Dog`:

// * add a method `speak(sound = "Bark")` → prints `"<name> says Bark"`.

//  Example:

// ```js
// const puppy = new Dog("Puppy");
// puppy.speak();       // "Puppy says Bark"
// puppy.speak("Woof"); // "Puppy says Woof"
// ```

// ---


class Animal{
    constructor(name){
        this.name=name;
    }
    speak(){
        console.log(`${this.name} make a sound`);
    }
}
const d=new Animal("Dog");
d.speak();

class dog extends Animal{
    
    speak(sound="bark"){
    console.log(`${this.name} says ${sound}`);
    }
}
const puppy = new dog("Puppy");
puppy.speak();       
puppy.speak("Woof"); 




