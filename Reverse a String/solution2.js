let string = "Hey, how are you?"
//?uoy era woh .yeH

let reversedArr = []; 

for(let i = string.length - 1; i >= 0 ; i--) {
    reversedArr.push(string[i]);
}

console.log(reversedArr.join(""));