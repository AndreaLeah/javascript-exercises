const caesar = function(string, num) {
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    string = string.split('');
    let i = 0;
    let newString = "";
    for (let letter of string) {
        if (letter == letter.toUpperCase()) {
            string[i] = upperCase[i + num];
        }
        else {
            string[i] = lowerCase[i + num];
        }
        console.log(upperCase[i + 1]);
        i += 1;
        }
    string = string.toString();
    return string;
    };

// Do not edit below this line
module.exports = caesar;
