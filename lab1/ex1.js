function CapitalizeLetter(s){
    const sentence = s.split(" ");
    const words = []; 
    for (let i = 0; i < sentence.length; i++) {
        words[i] = sentence[i].split("");
    }
    
    
    for (let i = 0; i < words.length; i++) {
        words[i][0] = words[i][0].toUpperCase();
        sentence[i]=words[i].join("");
       
    }
    
    const result = sentence.join(" ");

    return result;
}
console.log(CapitalizeLetter("the quick brown fox"))