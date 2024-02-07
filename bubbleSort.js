function bubbleSort(arr){
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }

    return arr;
}

let arr = [-6,-2,4,7,2,3,1];
console.log(bubbleSort(arr));

//O(n^2 )