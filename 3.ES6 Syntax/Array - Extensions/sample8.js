let customers = [
    {
        name : 'karthik',
        credit : 100
    },

    {
        name : 'yeswanth',
        credit : 200
    },

    {
        name : 'mounika',
        credit : 300
    }
];

console.log(customers.find( c => c.credit > 100));
