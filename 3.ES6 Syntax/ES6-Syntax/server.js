let server = 
{
    name: "Server",
    // restart: function()
    // {
    //     console.log("The"+ this.name+ "is restarting.....");
    // }

    restart()
    {
        console.log("The"+ this.name+ "is restarting.....");
    }
}

server.restart()