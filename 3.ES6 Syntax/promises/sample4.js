function getUsers()
{
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve([
            {username:'karthik',email:'katta@gmail.com'},
            {username:'yeswanth',email:'yes@gmail.com'}
            ]);
        },1000);
    })
}

const promise = getUsers();
promise.then( (user) => {
    console.log(user);
});