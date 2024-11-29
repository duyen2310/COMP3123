
const colors = [`red`, `green`,`blue`];
let  capitalizedColors = ()=>{
    let capitalColors;
    capitalColors = colors.map(color => {
            const [a, ...rest] = color.split("");
            return a.toUpperCase() + rest.join("");
        }
    );

    return capitalColors
}

console.log(capitalizedColors())