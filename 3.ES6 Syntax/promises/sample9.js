async function sayHi()
{
    return Promise.resolve('Hi');
    // return 'Hi'
}

sayHi().then(console.log);