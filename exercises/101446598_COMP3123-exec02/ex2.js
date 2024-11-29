let capitalize = (string) =>{
    const [a, ...rest]=string.split("");
    return a.toUpperCase()+rest.join("");
}

console.log(capitalize('fooBar'));

