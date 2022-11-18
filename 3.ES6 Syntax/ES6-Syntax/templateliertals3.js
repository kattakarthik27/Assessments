function format(literal, ...substitution)
{
    let result = '';
    console.log(literal);
    console.log(substitution);

    for(i =0; i < substitution.length; i++)
    {
        result += literal[i];
        result += substitution[i];
    }

    result += literal[literal.length -1];
    return result;
}

let quantity = 9,
    priceEach = 8.90,
    result = format `${quantity} item cost $${(quantity * priceEach).toFixed(2)}.`;
    console.log(result)