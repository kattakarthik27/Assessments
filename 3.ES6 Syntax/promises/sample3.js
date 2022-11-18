function getUsers(callback)
{
    setTimeout(() => {
        callback([
            {username:'karthik',email:'katta@gmail.com'},
            {username:'yeswanth',email:'yes@gmail.com'}
        ]);
    },1000)
}

function findUser(username,callback)
{
    getUsers((resp) => {
        const user = resp.find((user) => user.username === username);
        callback(user);
    });
}

findUser('yeswanth',console.log);