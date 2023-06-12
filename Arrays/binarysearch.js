//Given an arrray of numbers, search for target and return -1 of out found 
//else the index

function binary(arr, target){
let leftIndex = 0;
let rightIndex = arr.length - 1;
console.log("left1", leftIndex);
console.log("right1",rightIndex);

while(leftIndex <= rightIndex){      // left is less thaan right conditions will run
console.log("left2", leftIndex);
console.log("right2", rightIndex);
    let middle = Math.floor((leftIndex +rightIndex)/2); // math gives you to the nearest whole number
    if(arr[middle]===target){
        return middle;
    }
    else if(arr[middle] > target){
        rightIndex = middle -1
    }else{
        leftIndex = middle +1
    }

}
return -1;

}

let num = [1,2,3,6,9,56,89];
let target = 9;
console.log(binary(num,target));