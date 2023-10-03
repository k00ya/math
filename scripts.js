// === DO NOT EDIT THIS REGION ===

// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "1,2,3,4,5"
);

// Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Convert the array of strings into an array of numbers.
const numbers = [];
for (let i = 0; i < stringArray.length; i++) {
  const str = stringArray[i];
  const number = parseInt(str);
  numbers.push(number);
}

// Peform some calculations on the numbers.
console.log(numbers);
console.log(`You have given ${getLength(numbers)} numbers.`);
console.log(`The sum of your numbers is ${getSum(numbers)}.`);
console.log(`The mean of your numbers is ${getMean(numbers)}.`);
console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
console.log(`The largest of your numbers is ${getMax(numbers)}.`);
console.log(`The range of your numbers is ${getRange(numbers)}.`);
console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);

// === EDIT THE CODE BELOW ===

/**
 * Returns the length of an array of numbers.
 * @param {number[]} numbers - The array of numbers to get the length of.
 * @returns {number} The length of the array.
 */
function getLength(numbers) {
  return numbers.length;
}

/**
 * Calculates the sum of an array of numbers.
 * @param {number[]} numbers - The array of numbers to sum.
 * @returns {number} The sum of the numbers in the array.
 */
function getSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

/**
 * Calculates the mean of an array of numbers.
 * @param {number[]} numbers - The array of numbers to calculate the mean of.
 * @returns {number} The mean of the array of numbers.
 */
function getMean(numbers) {
  return getSum(numbers) / getLength(numbers);
}

/**
 * Returns the minimum value in an array of numbers.
 * @param {number[]} numbers - The array of numbers to search for the minimum value.
 * @returns {number} The minimum value in the array.
 */
function getMin(numbers) { 
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

/**
 * Returns the maximum number from an array of numbers.
 * @param {number[]} numbers - The array of numbers to find the maximum from.
 * @returns {number} The maximum number from the array.
 */
function getMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

/**
 * Calculates the range of an array of numbers.
 * @param {number[]} numbers - The array of numbers to calculate the range from.
 * @returns {number} The range of the array of numbers.
 */
function getRange(numbers) {
  return getMax(numbers) - getMin(numbers);
}

/**
 * Returns an array of even numbers from the input array.
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number[]} - An array of even numbers from the input array.
 */
function getEvens(numbers) {
  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

/**
 * Returns an array of odd numbers from the input array.
 * @param {number[]} numbers - The input array of numbers.
 * @returns {number[]} - An array of odd numbers from the input array.
 */
function getOdds(numbers) {
  const odds = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      odds.push(numbers[i]);
    }
  }
  return odds;
}
