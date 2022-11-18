let ranks = [1,2,3];

for(let i = 0; i < ranks.length; i++)
{
    console.log(ranks[i]);
}

// for ..of  <-- new loop constructor in ES6

for(let rank of ranks)
{
    console.log(rank);
}