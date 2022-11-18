class Person{
    constructor(name,age)
    {
        this.setPerson(name, age);
    }
    getPerson()
    {
        return this.name+ " "+this.age;
    }

    setPerson(newName, newAge)
    {
        newName = newName.trim();
        this.name = newName;
        this.age = newAge;
    }
}

let p = new Person("karthik", 24);
console.log(typeof p);
console.log(p instanceof Person)
console.log(p.name);
console.log(p.age);