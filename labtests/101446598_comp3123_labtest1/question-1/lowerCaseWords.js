let lowerCaseWords=(mixedArray)=>{
    let newArray = [];
    for(let i =0; i< mixedArray.length;i++){
        if (typeof mixedArray[i]==='string'){
            newArray.push (mixedArray[i].toLowerCase());
        }
    }
    return newArray;
}

const mixedArray = ['PIZZA', true, false, "SHrimp", 10, 20];
console.log(lowerCaseWords(mixedArray));
