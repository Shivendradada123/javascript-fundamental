# javascript fundamental by shivendra

## basic operation

1. how to print unique element from array
```js
const array = [1,2,3,33,22,22,9,9,69,6,6]
let set = new Set()

for(let i = 0 ; i <array.length ; i++){
    set.add(array[i])
}

console.log([...set])
```