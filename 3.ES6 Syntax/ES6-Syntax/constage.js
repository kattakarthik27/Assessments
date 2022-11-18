const person = Object.freeze({age : 20});


person.age = 35;            // changing the value of property
console.log(person.age);

// person = {age: 33};         // re-assigning the value
// console.log(person.age);