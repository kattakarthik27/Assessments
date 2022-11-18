function sum(...args)
{
    let total = 0;
    for(const a of args)
    {
        total += a;
    }
    return total;
}

var res = sum(10,20,30,40);
console.log(res);