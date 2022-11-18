function arrayFromArgs(){
    var result = [];
    for(var i = 0; i < arguments.length; i++){
        result.push(arguments[i]);
    }
    return result;
}

var fruits = arrayFromArgs('Apple', 'Banana','Orange');
console.log(fruits);
console.log(typeof fruits)