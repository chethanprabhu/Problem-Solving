let arr1 = [1, 4, 8];
let arr2 = [2, 9, 7, 2, 3];

const resArray = [];

let i = j = 0;

let arr1Item = arr1[i];
let arr2Item = arr2[j];

while(arr1Item || arr2Item) {
    if(!arr2Item || arr1Item < arr2Item) {
        resArray.push(arr1Item);
        arr1Item = arr1[++i];    
    } else {
        resArray.push(arr2Item);
        arr2Item = arr2[++j];
    }
}

console.log(resArray);

