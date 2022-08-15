const caesar = function(string, num) {
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    string = string.split('');
    let newString = "";
    for (let letter of string) {
        if (letter == letter.toUpperCase()) {
            let i = upperCase.indexOf(letter);
            let uLetter = upperCase[i + num];
            newString += uLetter;
        }
        else {
            let i = lowerCase.indexOf(letter);
            let lLetter = lowerCase[i + num];
            newString += lLetter;
        }}
    return newString;
    };

// Do not edit below this line
module.exports = caesar;
