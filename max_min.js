// Program to rearrange an array based on the element's size
// relative to the array

function compare(a,b){
    // function to compare two elements 
    return a - b;
}

function sortArr(arr) {
    // returns true if array is Sorted
    // returns a sorted array if not 
    let n = arr.length
    for(let i = 1; i <= n -1; i++){
        if(arr[i] - arr[i-1] < 0){
            return arr.sort(compare)
        } 
    }
    return arr
}

function max_min(arr){
    //function to rearrange the array

    //checks to see if the array is sorted
    sortArr(arr);

    //gets the length of the array
    n = arr.length;

    // array to hold modified array
    let newArr = new Array(arr.length);

    let minpoint = 0;
    let maxpoint = n - 1; 

    // state to indicate whether to copy the remaining
    // maximum or minimum value
    let currentState = true;

    for (let i = 0; i < n; i++) {
        if(currentState){
            newArr[i] = arr[maxpoint--];
        } else {
            newArr[i] = arr[minpoint++];
        }

        currentState = !currentState
    }

    return newArr;
}


console.log(max_min([1, 6, 7, 5]))
console.log(max_min([1, 3, 4, 5]))
console.log(max_min([1, 3, 7, 5]))
console.log(max_min([2, 4, 6, 8, 10]))

// space complexity is n + 4
// time complexity is n ^ 2
// method can be useful in cryptography, randomixation in machine learning and load balancing of servers.
