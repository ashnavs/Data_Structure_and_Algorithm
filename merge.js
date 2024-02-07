function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }

    let mid = Math.floor((arr.length)/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let sa = [];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sa.push(left.shift())
        }else{
            sa.push(right.shift())
        }
    }
    return sa.concat(left,right)
}

let arr = [12,1,11,13,5,6];
console.log(mergeSort(arr));