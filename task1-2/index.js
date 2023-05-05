function task_one_inner_array(arr){
    let suma = 0;
    if (arr.length === 0){
        return 0;
    }
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            const innerSum = task_one_inner_arrays(arr[i]);
            if(!isNaN(innerSum)) { // check if innerSum is a valid number
              suma += innerSum;
            }
        }
        else if(!isNaN(arr[i])) { // check if arr[i] is a valid number
            suma += arr[i];
        }
    }
    return suma;
  }
 
console.log(task_one_inner_arrays2([1,[2,[4,[5],[6]],3]]))
console.log(task_one_inner_arrays2([[[[[[]][[]]]]]]))
 
 
function task_two_subarrays(arr, sub_size){
    if (arr.length === 0 || sub_size < 0){
        return [];
    }
    array_of_subarrays = [];
    if (arr.length >= sub_size){  
        for (let i = 0; i < arr.length - sub_size + 1; i++){
            ithSubarray = arr.slice(i, i + sub_size);
            array_of_subarrays.push(ithSubarray);
        }   
    }
    else{
        array_of_subarrays.push(arr);
    }
 
    return array_of_subarrays;
}
 
console.log(task_two_subarrays([1,2,3,4,5,6,7], 7))
console.log(task_two_subarrays([1,2,3,4,5,6,7], 13))
console.log(task_two_subarrays([],10))
console.log(task_two_subarrays([1,2,3], -3))
 