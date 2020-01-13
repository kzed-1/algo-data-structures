const getDigitFrom = (num, place) => Math.floor(Math.abs(num) /Math.pow(10,place)) % 10;
    // divide by the place value to get a decimal
    // mod 10 to get rid of the decimal 
const getIntLength = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
    //use the log base 10 plus 1 to get the integer length
function getMaxDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        //iterate through the nums arr 
        // change variable to the hihes
        maxDigits = Math.max(maxDigits, getIntLength(nums[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let maxDigits = getMaxDigits(arr);
    for(let k = 0; k < maxDigits; k++){ // iterate how many times according to the max digit number in the array
        let buckets = Array.from({ length: 10 }, () => []);// create empty array depending on maxdigit of a number in the arrary

        for(let i = 0; i < arr.length; i++) {
            let digit = getDigitFrom(arr[i], k); //get the digit in that place number,k, for arr[i]
            buckets[digit].push(arr[i]); //push the digit in the appropriate index of the bucket 
        }
        
        arr = [].concat(...buckets);
    }
    return arr;

}

module.exports = {
    radixSort
};