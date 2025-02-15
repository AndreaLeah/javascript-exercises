const caesar = function(string, num) {
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  
    string = string.split('');
    let newString = "";
    for (let letter of string) {
        if (/[a-zA-Z]/.test(letter) === false) {
            newString += letter;
        }
        else {
          //UpperCase Letter Check
            if (letter == letter.toUpperCase()) {
                let uLetter;
                let n;
                let i = upperCase.indexOf(letter);
                
                if (num > 25 && num < 53) {
                  n = 1;
                  num = num - (26 * n);
                }
                else if (num >52 && num <80) {
                  n = 2;
                  num = num - (26 * n);
                }
                
                if (i + num > 25) {
                  i = ((i + num) - 1) - 25
                  uLetter = upperCase[i];
                }
                else if (i + num < 0) {
                  i = (i + num) + 26;
                  uLetter = upperCase[i];
                }
                else {
                uLetter = upperCase[i + num];
                }
                newString += uLetter;
            }
            else {
              //Lowercase Letter Check
                let lLetter;
                let i = lowerCase.indexOf(letter);
                
                if (num > 25 && num < 53) {
                  n = 1;
                  num = num - (26 * n);
                }
                else if (num >52 && num <80) {
                  n = 2;
                  num = num - (26 * n);
                }
                
                if (i + num > 25) {
                  i = ((i + num) - 1) - 25
                  lLetter = lowerCase[i];
                }
                else if (i + num < 0) {
                  i = (i + num) + 26;
                  lLetter = lowerCase[i];
                }
                else {
                lLetter = lowerCase[i + num];
                }
                newString += lLetter;
            }}}
    return newString;
    };

// Do not edit below this line
module.exports = caesar;
