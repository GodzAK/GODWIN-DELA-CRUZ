 //Destructing objects and arrays
//Sept 2025

const person = {
    name:'John',
    age:25,
    hobbies: ['reading','cooking'],
    greet: function(){
        console.log('hello, my name is'+ this.name+ 'and i am'+this.
            age+'years old.');
    }
};

//when to use destructing?
//destructing is useful when you only need a specific property of an object.

//regular function
//regular passing of object
//even though we are passing the whole object, we are only using the name property
//const printName = (personData)=>{
    //console.log(personData.name);
    //}

//destructing the object
//if we are only intertested in the name property of the object, we can use destructing
const printName = ({name}) =>{
    console.log(name);
}
//we pass the object as an argument to the function
printName(person);

//without function destructing
const {name, age} = person;
console.log(name,age);

//destructring arrays
const hobbies = ['reading','cooking'];
const[hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);


/*reminders when using destructing
-the property name must match the object property name.
-the property name must be enclosed in curly braces.
-the property name must be followed by a colon.
*/
