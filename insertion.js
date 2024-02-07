function insertion(arr){
    const n=arr.length;
    for(let i=1;i<n;i++){
        let ce = arr[i];
        let j = i-1;
        while(j>=0&&arr[j]>ce){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = ce;
    }
    return arr;
}
let arr = [11,13,12,4,5];
console.log(insertion(arr));