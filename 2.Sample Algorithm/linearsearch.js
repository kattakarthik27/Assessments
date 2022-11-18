function Linear_search(arr,target){
    for(let i in arr)
{
    if(arr[i]===target)
    return i;

}
return -1;
}

console.log(Linear_search([10,20,30,40,50],10))
console.log(Linear_search([10,20,30,40,50],50))
console.log(Linear_search([10,20,30,40,50],45))