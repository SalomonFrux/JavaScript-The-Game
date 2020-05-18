years = [1990, 1991, 1981];

  //parsing function as argument in JavaScript 

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

// First class function in Js ... A function that return another function

function firstFunction(profession){

return  function(name){
        if(profession === 'Teacher'){
            console.log(`Hi ${name} what subject do you teach?`) 
        }
        else(
            console.log('Please explain what your job is about.')
        )
    }
}

 firstFunction('Teacher')('Sam')
