let arr1 = [1, 4, 8];
let arr2 = [2, 9, 7, 2, 3];

let resultArr = [];

let i = 0;
for(i ; i < arr1.length ; i++) {
    resultArr.push(arr[i]);
}

for(let j = 0 ; j < arr2.length ; j++, i++) {
    resultArr[i].push(arr2[i]);
}

console.log(resultArr);