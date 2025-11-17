# Function in JavaScript — By Shivendra

## Standard Example of a Function

```javascript
function nextInLine(arr, item) {
  arr.push(item);      // Add item to the end of the array
  return arr.shift();  // Remove the first element and return it
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
