function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const leftArray = arr.slice(0,mid);
    const rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray),mergeSort(rightArray));
}

function merge(leftArray,rightArray){
    const sortedArray = [];
    while(leftArray.length>0&&rightArray.length>0){
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift());
        }else{
            sortedArray.push(rightArray.shift());
        }
    }
    return sortedArray.concat(leftArray,rightArray)
}

let arr = [12,11,13,5,6];
console.log(mergeSort(arr));