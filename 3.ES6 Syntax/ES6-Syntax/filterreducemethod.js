function sum(...args)
{
    return args

    .filter(function (e)
    {
        return typeof e === 'number'
    })

    .reduce(function(prev, curr)
    {
        console.log(prev+ " "+ curr);
        return prev + curr
    })
}

let res = sum(10, 'welcome', null, undefined, 20);
console.log(res)