let i = 0 ;
let myarr = [];
do{
myarr.push(i)
i++
}while(i < 19)


    console.log(i);
    console.log(myarr);


    function factorial(n) {
  
  if (n === 0 || n === 1) {
    return 1;
  }

  
  let fact = n * factorial(n - 1);
  return fact;
}