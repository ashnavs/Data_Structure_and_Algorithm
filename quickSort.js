// function partition(arr, low, high) {
//     const pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             // Swap arr[i] and arr[j]
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     // Swap arr[i + 1] and arr[high] to place pivot in its correct position
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

//     return i + 1;
// }

// function quickSort(arr, low, high) {
//     if (low < high) {
//         const pivotIndex = partition(arr, low, high);

//         // Recursively sort elements before and after the pivot
//         quickSort(arr, low, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, high);
//     }

//     return arr;
// }

// const arr = [4, -2, 6, 5, 0];
// console.log(quickSort(arr, 1, arr.length - 1));


//pivot-end
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
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[12,11,13,5,6];
console.log(quickSort(arr));

//worst case: O(n^2);
//avg case: O(n logn)