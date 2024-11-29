function right(str) {
    
    if (str.length < 3) {
        return str; 
    }
    
    const lastThree = str.slice(-3);

    const remaining = str.slice(0, -3);
    
   
    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));
