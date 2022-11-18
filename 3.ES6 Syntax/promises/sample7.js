// async/await
// three tasks

function getUser(userId, callback){
    console.log('Get user from DB...');
    setTimeout( () => {
        callback({
            userId: userId,
            username: 'karthik'
        });
    },1000);
}

function getService(user, callback){
    console.log(`Get services of ${user.username} from API`);
    setTimeout( () => {
        callback(['Email', 'VPN', 'CDN']);
    },2*1000);
}

function getServiceCost(services, callback){
    console.log(`Calculate service cost of ${services}`);
    setTimeout( () => {
        callback(services.length *1000);
    }, 3*1000)
}

getUser(100, (user) => {
    getService(user,(services) => {
        getServiceCost(services,(cost) => {
            console.log('The service cost is ${cost}');
        })
    })
});