function encode(str, magicNumber){
    let arr = str.split("");
    let charCodeArr = [];
    arr.forEach(letter => {
        charCodeArr.push((letter.charCodeAt() + 4) * magicNumber);
    });

    return charCodeArr;
}

function decode(code, magicNumber){
    let decodedArr = [];
    code.forEach((code) => {
        decodedArr.push(String.fromCharCode((code/magicNumber) - 4))
    })
    
    return decodedArr.join("");
}
console.log(encode("crypto graphy", 5));

console.log(decode([515,590,625,580,600,575,535,590,505,580,540,625], 5));