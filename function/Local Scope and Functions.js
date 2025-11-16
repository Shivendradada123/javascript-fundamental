function myLocalScope() {
  // Only change code below this line
var myVar = "commtoze"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();



// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);      // Error ayega kiyuki var funtion ke andar hai blockscope 