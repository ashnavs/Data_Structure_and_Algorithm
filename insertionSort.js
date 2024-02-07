function insertionSort(arr){
    const n=arr.length;
    for(let i=1;i<n;i++){
        let currentElement = arr[i];
        j = i-1;

        while(j>=0&&arr[j]>currentElement){
            arr[j+1] = arr[j];
            j--;
        }

        arr [j+1] = currentElement
    }
    return arr;
}

let arr = [12,11,13,5,6];
console.log(insertionSort(arr));

//O(n^2)