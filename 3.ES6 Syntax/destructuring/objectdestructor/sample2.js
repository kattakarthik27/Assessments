let person = {
    firstName : 'karthik',
    lastName : 'katta',
    middleName : 'c.', //default value check line number 8
    currentAge : 23  //default value check line number 8
}

    let {firstName,lastName,middleName = '',currentAge:age =18} = person;

    console.log(middleName);
    console.log(age);
