function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot = arr[arr.length-1];
    let right =[];
    let left = [];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(right),pivot,...quickSort(left)]
}

let arr=[12,11,13,5,6];
console.log(quickSort(arr));