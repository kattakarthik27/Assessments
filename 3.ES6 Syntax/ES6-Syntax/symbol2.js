let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In Progress'),
    COMPLETED: Symbol('Completed'),
    ON_HOLD: Symbol('On Hold'),
    CANCELLED: Symbol('Cancelled')
};

// console.log(statuses.COMPLETED);

let status = Symbol('Status');
let task = {
    [status]: statuses.IN_PROGRESS,
    Description: 'ES6 IS IN PROGRESSION'
};

console.log(task);
console.log(Object.keys(task));
console.log(Object.getOwnPropertyNames(task));