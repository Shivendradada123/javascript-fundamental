# Logical Order in If Else Statements


1. else if 

``` function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7); ```



#Default  statement in javaScript 

1.default case 
``` function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default:
  answer = "stuff"

}


  // Only change code above this line
  return answer;
}

switchOfStuff(1); ``` 

1. default else jaise hi hota hai jab koye case match nhi hota hai tab default wali value ayegi