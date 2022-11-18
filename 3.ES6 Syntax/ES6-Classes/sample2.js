class Person{
    constructor(name){
        this.name = name;
    }

    getName()               //getName = 
    {
        return this.name;
    }
}

let p = new Person("katta karthik");
console.log(p.getName());