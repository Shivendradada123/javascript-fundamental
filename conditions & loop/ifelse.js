const number = 16;

if(number < 18) {
    console.log("he is not a 18+")
} else if(number > 18){
    console.log("yes you are 18+")
};

// out put is he is he is not a 18+





const marks = 70;

if(marks >= 60){
    console.log("good marks")

}else if(marks >= 75){
    console.log("yes you are topper")
}else{
    console.log("you are fail")
}


//output is "good marks"






for (let a = 0; a <= 100000; a++) {
  console.log(a);
}



const num = [1,2,4,5,6,7,8];

for (let a = 0; a < num.length; a++) {
    if (num[a] % 2 === 0) {
        console.log(num[a]);
    }
}





const num1 = [1,2,3,4,5,6,7,8].filter((ele) => ele%2 == 0)

console.log(num1)