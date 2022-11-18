function Person(name)
{
    this.name = name;
}

Person.prototype.getName = function()
{
    return this.name;
}

var p = new Person("karthik");
console.log(p.getName());