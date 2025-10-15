 const array = ["shivendra", "aditya", "codding", "fullstackdevloper"]

const somearray = array.some(word => word === "shivendra"); 
const somearray2 = array.some(word => word === "bmw");

console.log(somearray);  // result true kiyuki isme "shivendra" hai

console.log(somearray2); // result false kiyuki isme "bmw" nhi hai



const numberarray = [1,3,5,7,9,11,13,15]

const somearray3 = numberarray.some(num => num <10);
console.log(somearray3); 