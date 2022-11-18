let person = {
    firstName : 'karthik',
    lastName : 'katta'
};

//Prior of ES6

// let fname = person.firstName;
// let lname = person.lastName;
//console.log(fname+ " "+lname);

//ES6

let{firstName:fname, lastName:lname} = person;
console.log(fname+" "+lname);