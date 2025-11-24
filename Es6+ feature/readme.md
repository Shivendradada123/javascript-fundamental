// Let VS const 

// 1

var a = "Shivendra "

a = "Aditya"   //  var me value change kar sakte hai 



// 2 

const b = "Shivendra";
b = "Adtiya"  // not change error







# object ko lock kaise kare ki koye change n kar paye 

1. ye jo freeez hai usko karne se object lock ho jata hai

``` function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);


return MATH_CONSTANTS.PI

}
const PI = freezeObj() ``` 
