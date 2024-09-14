var array =[1,2,3,4]
let calSum = (t, e) => t+e;
let calProduct = (t, e)=> t*e;

let calculateSum = array.reduce(calSum)
let calculateProduct = array.reduce(calProduct)

console.log(calculateSum)
console.log(calculateProduct)