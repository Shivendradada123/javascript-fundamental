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






#Comparison with the Strict Inequality Operator

1. !== iska matlab hai ki pehle iska type check karo phir value dono same honhi chaiye

``` function testStrictNotEqual(val) {
  if (val !==17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10); ```


