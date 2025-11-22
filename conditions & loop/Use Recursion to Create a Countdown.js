// Only change code below this line
function countdown(n){
  if(n <1){
    return[];
  }else {
    const count = countdown(n - 1)
      return [n, ...count]
    
  }
}