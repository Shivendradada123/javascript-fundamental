const data = {
    nam: "Shivendra",
    age: 17,
    address: "mauhariya",
    divce: "iqooz10/ HP"
}

console.log(data.hasOwnProperty("nam"))  // true   // hasownProperty check karta hai ki object ki andar wo value hai ya nhi 
console.log(data.hasOwnProperty("aditya"))  // false   // beacuse nhi hai aditya obj me