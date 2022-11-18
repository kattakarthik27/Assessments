for(var i=0; i<5; i++)
{
    (function(j)        // creating another scope so that each callback function reference a new variable
    {
        setTimeout(function()
        {
            console.log(j);
        },1000);
    }) (i);
}