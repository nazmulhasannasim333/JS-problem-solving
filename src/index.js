// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const reverseWord = (str) => {
  const splitString = str.split("");
  const reversArray = splitString.reverse();
  const jointArray = reversArray.join("");
  return jointArray;
};
const result = reverseWord("Hello world");
console.log(result);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array
let arr1 = [2, -5, 10, -3, 7, 0, 8, -5];
let sum = arr1.reduce((r, x) => (x > 0 ? x + r : r), 0);
console.log(sum);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
function mostFrequent(arr) {
  let maxcount = 0;
  let max_freq;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) count++;
    }

    if (count > maxcount) {
      maxcount = count;
      max_freq = arr[i];
    }
  }

  return max_freq;
}
let arr2 = [3, 5, 2, 5, 3, 3, 3, 1, 4, 5];
console.log(mostFrequent(arr2));

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function twoSumSortedArray(nums, target) {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remaining = target - num;

    if (hashMap.hasOwnProperty(remaining)) {
      return [hashMap[remaining], i];
    }

    hashMap[num] = i;
  }

  return []; // If no two numbers sum up to the target
}

const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;

const output = twoSumSortedArray(inputArray, targetValue);
console.log(output);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
function calculate(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
  } else {
    return "Error: Invalid operator.";
  }
}

const num1 = 10;
const num2 = 5;
const operator = "-";
const result2 = calculate(num1, num2, operator);
console.log(result);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*()-_=+[{]};:,<.>?";

  const allChars = upperChars + lowerChars + numberChars + specialChars;
  const allCharsLength = allChars.length;

  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharsLength);
    password += allChars.charAt(randomIndex);
  }

  return password;
}

const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);

// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
function romanToInt(romanNumeral) {
  const romanNumeralsMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanNumeralsMap[romanNumeral[i]];
    const nextSymbolValue = romanNumeralsMap[romanNumeral[i + 1]];

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++; // Skip the next character as it was already processed
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

const romanNumeral1 = "IX";
const romanNumeral2 = "XXI";

console.log(romanToInt(romanNumeral1));
console.log(romanToInt(romanNumeral2));

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
let arr = [15, 37, 9, 21, 55];
let min = Infinity,
  secondMin = Infinity;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    secondMin = min;
    min = arr[i];
  } else if (arr[i] < secondMin) {
    secondMin = arr[i];
  }
}

console.log("Smallest number: " + min);
console.log("Second smallest number: " + secondMin);
