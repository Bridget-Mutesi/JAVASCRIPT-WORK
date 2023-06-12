//MergeSorting
function divideArray(arr){   
    if(arr.length <= 1){
        return arr;
    };
    let middle = Math.floor(arr.length / 2);  // dividing our Array
    let left = arr.slice(0, middle); // cutting the array and returns the index or the array
    let right = arr.slice(middle);
    console.log({left})
    console.log({right})
    return sortedArray(divideArray(left), divideArray(right)) // initializing the arrays


}

function sortedArray(left, right){  // Sorting our array
    let emptyArray = [];
    while(left.length && right.length){ // check if left and right are present
        if(right[0] < left[0]){
            emptyArray.push(right.shift())
        }
        else{
            emptyArray.push(left.shift());
        }


    }
    console.log({emptyArray});
    return [...emptyArray, ...left, ...right]
}
let arr = [3, 2, 10, 26, 15, 11, 4];
console.log(divideArray(arr));