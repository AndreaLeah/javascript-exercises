const palindromes = function (arg) {
    const result = arg.replace(/[!"#$%&'()*+,-./:;<=>\s?@[\]^_`{|}~]/g, '').toLowerCase();
    let reversed = result.split('').reverse().join('');
    return result === reversed;
};

// Do not edit below this line
module.exports = palindromes;
