const removeFromArray = function(arr, ...nums) {
    for (let j =0; j < nums.length; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === nums[j]) {
                arr.splice(i, 1);
            }
        }
    }
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
