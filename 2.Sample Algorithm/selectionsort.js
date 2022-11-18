function selectionSort(arr)
{
 
    for (let i = 0; i < arr.length; i++)
    {
        let lowest = i;
   
        for (let j = i + 1; j < arr.length; j++){
        if (arr[j] < arr[lowest]){
            lowest = j;
            }
        }

        if(lowest !==i){
           [arr[lowest],arr[i]]=[arr[i],arr[lowest]]
        }
    }
    console.log(arr)
}
 

var arr = [64, 25, 12, 22, 11];

selectionSort(arr);