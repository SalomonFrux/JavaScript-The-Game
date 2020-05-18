years = [1990, 1991, 1981];

   

function ageCal(dateOfBirth){
    return ( new Date().getFullYear() - dateOfBirth)
}

function arrayList(arr, fn ){
    var array  = [];
    for(i =0; i< arr.length; i++){
    array.push(fn(arr[i]))
    
    }
    return array;
    }
    
 

let ages = arrayList(years, ageCal)

console.log(ages)
//parsing function as argument in JavaScript

