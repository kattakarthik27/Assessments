let employee = {
    id : 1001,
    emp_name : {
        firstName : 'karthik',
        lastName : 'katta'
    }
};

let {
    id,
    emp_name : {
        firstName,
        lastName
    }
} = employee;

console.log(id+ " "+firstName+" "+lastName)