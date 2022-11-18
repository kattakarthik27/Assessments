async function getUser(userId){
    await Promise.reject(new Error('Invalid UserId'));
}

getUser().catch(err => {
    console.log(err);
})