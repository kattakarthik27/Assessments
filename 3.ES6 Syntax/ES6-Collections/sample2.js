let vidhya = {name:"Vidhya"},
    karthik = {name:"Karthik"},
    yeswanth = {name:"Yeswanth"};
    alex = {name:"Alex"};

let userRoles = new Map();
console.log(typeof(userRoles));
console.log(userRoles instanceof Map);

userRoles.set(vidhya,'admin');
userRoles.set(karthik,'editor');
userRoles.set(yeswanth,'subscriber');

console.log(userRoles.get(yeswanth));

console.log(userRoles.has(alex));
console.log(userRoles.size);

console.log("=========");

for(const user of userRoles.keys()){
    console.log(user.name);
}

console.log("=========");

for(let user of userRoles.values()){
    console.log(user)
}

console.log("===============");

for(const role of userRoles.entries()){
    console.log(`${role[0].name} : ${role[1]}`);
}

console.log("===============");

for(let [user,role] of userRoles.entries()){
    console.log(`${user.name} : ${role}`);
}

console.log("===============");

userRoles.forEach((role,user) => console.log(`${user.name} : ${role}`));

console.log("===============");

let role = [...userRoles.values()];
console.log(role);

console.log("===============");

console.log(userRoles.size);
userRoles.clear();
console.log(userRoles.size);