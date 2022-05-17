// link: https://www.hackerrank.com/contests/javascript-challenges/challenges/find-second-largest-number-in-an-array/submissions/code/1344755430

'use strict'
process.stdin.resume()
process.stdin.setEncoding('utf-8')
let inputString = ''
let currentLine = 0
process.stdin.on('data', inputStdin => {
  inputString += inputStdin
})
process.stdin.on('end', _ => {
  inputString = inputString.trim().split('\n').map(string => {
    return string.trim()
  })
  
  main()
})

const readLine = () => {
  return inputString[currentLine++]
}

const getSecondLargest = (nums) => {
  const sArray = nums.sort((a, b) => {
    return a - b
  })
  const fArray = sArray.filter((ex, idx, self) => {
    return idx == self.indexOf(ex)
  })
  return fArray[fArray.length - 2]
}

const main = () => {
  const firstNum = +(readLine())
  const nums = readLine().split(' ').map(Number)  
  console.log(getSecondLargest(nums))
}