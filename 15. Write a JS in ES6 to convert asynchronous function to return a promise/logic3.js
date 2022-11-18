let name = async() =>{
	let output = await Promise.resolve("This is karthik");
	return output;
}
name().then((result)=>{
	console.log(result);
});