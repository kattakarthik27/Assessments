let sayHi = async () => {return "Hi User"};

async function display(){
    let result = await sayHi();
    console.log(result);
}

display();