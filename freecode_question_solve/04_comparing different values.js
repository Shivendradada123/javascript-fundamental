function compareEquality(a, b) {
  if (a === "b") { // Change this line
    return "Not Equal";
  } else if(typeof a === "number" && typeof b === "string"){
    return "number and string"
  } else{
     return "Not Equal";
  }

}

// compareEquality(10, "10");
// compareEquality(69, "69");

console.log(compareEquality(10, "10"))
console.log(compareEquality(69, "shivendra" ))
console.log(compareEquality(13, 13 ))