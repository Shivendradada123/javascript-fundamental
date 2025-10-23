# javascript fundamental by shivendra

## basic operation

### set in array
#### sets

1. how to print unique element from array
```js
const array = [1,2,3,33,22,22,9,9,69,6,6]
let set = new Set()

for(let i = 0 ; i <array.length ; i++){
    set.add(array[i])
}

console.log([...set])
```




# sets in array

## sets exmaple 
1. first eg.
```const array = [1,22,22,11,11,1,3,4,5,6,7,666,444,444]
const sets = [...new Set(array)];
console.log(sets) ```




# split opreator in javascipt

## split ("")

``` 1. const pra = "hey i am shivendra mauhariya ";

console.log(pra.split("")) ```

### type 2 

``` 1.

const split = "shivendra,aditya,saurav"

console.log(split.split(",")) ```