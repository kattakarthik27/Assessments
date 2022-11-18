function getUsers()
{
    let users = [];
    // return[
    //     {username : 'karthik', email:'karthik@gmail.com'},
    //     {username : 'mounika', email:'mounika@gmail.com'}
    // ]

    setTimeout( () => {
        users = [
            {username : 'karthik', email:'karthik@gmail.com'},
            {username : 'mounika', email:'mounika@gmail.com'}
        ]
    },1000);

    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('karthik'));