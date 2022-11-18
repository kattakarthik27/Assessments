function createUser(name,age)
// {
//     return{
//         name:name,
//         age:age
//     }
// }

{
    return{
        name,
        age
    }
}


var obj = createUser("Karthik", 23);
console.log(obj.name+ " "+ obj.age);