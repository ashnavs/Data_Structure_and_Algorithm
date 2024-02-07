function bubbleSort(arr){
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]<arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

let arr=[12,11,13,5,6];
console.log(bubbleSort(arr));