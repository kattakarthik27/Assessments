class Person{
    constructor(name)
    {
        this.setName(name);
    }

    getName()
    {
        return this.name;
    }

    setName(newName)
    {
        newName = newName.trim();   // remove spaces
        this.name = newName;
    }
}

let p = new Person(" lallu Prasad ");
console.log(p.name);