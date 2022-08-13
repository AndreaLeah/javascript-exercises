const fibonacci = function(n) {
    let arr = [1, 1];
    if (n < 0) {
        return "OOPS";
    }
    else if (n == 1 || n ==2) {
        return 1
    }
    else {
        for (let i = 0, j = 1; (j + 1) < n; i++, j++) {
            let newValue = arr[i] + arr[j];
            arr.push(newValue);
        }
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
