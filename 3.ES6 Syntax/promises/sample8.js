function getUser(userId){
    return new Promise ( (resolve, reject) => {
        console.log(`Get user from Database...`);
        setTimeout( () => {
            resolve({
                userId: userId,
                username: 'karthik'
            })
        },1000)
    })
}

function getService(user){
    return new Promise( (resolve,reject) => {
        console.log(`Get services of ${user.username} from APLI`);
        setTimeout( () => {
            resolve(['Email', 'VPN', 'CDN']);
        },2*1000);
        })
}

function getServiceCost(services){
    return new Promise((resolve,reject) => {
        console.log(`Calculate services cost of ${services}`);
        setTimeout( () => {
            resolve(services.length * 100);
        }, 3 *1000)
    })
}

// chain the promise

// getUser(100)
//     .then(getService)
//     .then(getServiceCost)
//     .then(console.log);

async function showServicesCost(){
    let user = await getUser(100);
    let services = await getService(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
}

showServicesCost();