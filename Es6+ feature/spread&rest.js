  
  // ...    1ST example 
  
  let a = [3,3,5,5,6,6,6,]

let b = [...a]
console.log(b)


// 2nd example 


let  s = (a,b,c, ...ss) => {
    console.log(a,b,c,ss)
}

s(4,5,6);  // 4,5,6 // parameter ki baad wali value ignoren   is liye ... iska upyog karte hai
s(4,5,6,8,6,5)

