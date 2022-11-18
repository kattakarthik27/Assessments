function bblSort(arr){
    
    for(var i = arr.length-1; i>0; i--){

      for(var j = 0; j < i; j++){
         

        if(arr[j] > arr[j+1]){
           

          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j+1] = temp

          // [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]
        }
      }
    }

    console.log(arr);
   }
    
    

var arr = [234, 43, 55, 63,  5, 6, 235, 547];
    
    
 
bblSort(arr);