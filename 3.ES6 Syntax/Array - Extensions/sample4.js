function arrayFromArgs(){
    return Array.from(arguments);
}

var fruits = arrayFromArgs('Apple', 'Orange','Banana');
console.log(fruits);