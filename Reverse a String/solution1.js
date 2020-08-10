let string = "Hey, how are you?"
//?uoy era woh .yeH

let stringArr = string.split("");

let reversedArr = []; 

for(let i = stringArr.length - 1, j = 0; i >= 0 ; i--, j++) {
    reversedArr[j] = stringArr[i];
}

reversedArr = reversedArr.join("");

console.log(reversedArr);

