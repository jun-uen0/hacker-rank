// function processData(myArray) {
  // console.log(_input)
  // 5
  // 2 3 6 6 5

  // const inputArr = _input.split("\n")
  const inputArr = ["5", "2 3 6 6 5"]
  const arr = inputArr[1].split(" ").map(Number)

  const removeDuplicates = arr => {
    return [...new Set(arr)]
  }
  const arrOnlyUniques = removeDuplicates(arr)
  const sortedArr = arrOnlyUniques.sort()

  if (sortedArr.length <= 0) {
    console.log("zero or less than zero")
  } else if (sortedArr.length <= 2) {
    console.log(sortedArr[0])
  } else {
    const lastTwo = sortedArr[sortedArr.length -2]
    console.log(lastTwo)
  }
  

// }

// // tail starts here
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//   _input += input;
// });

// process.stdin.on("end", function () {
//  processData(_input.split('\n')[1].split(' ').map(Number));
// });


'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});
function readLine() {
    return inputString[currentLine++];
}
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var sArray = nums.sort(function (a,b){
        return a - b;
    });
    var uSarray = sArray.filter(function (elm, index, self){
        return index == self.indexOf(elm);
    });
    return uSarray[uSarray.length - 2];
}
function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}