function add(a,b){
    return a+b
};
function mutli(n,m){
    return n*m
};
function sub(n,m){
    return n-m
};




function calulate(val,x,y){
    return val(x,y)
};

console.log(calulate(add,3,3))
console.log(calulate(mutli,3,3))
console.log(calulate(sub,4,3))