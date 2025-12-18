let nums = [1, 2, 3, 4]

function sumArr(arr) {
    let sum = 0;
    try {
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum;
    } catch (error) {
        console.log(error)
    }
}

function findLargest(arr) {
    let currentLargest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (currentLargest < arr[i]) {
            currentLargest = arr[i]
        }
    }
    return currentLargest;
}

function getLength(arr) {
    let length = 0;
    for (let i = 0; i < arr.length; i++) {
        length++;
    }
    return length;
}

for (const [index, element] of nums.entries()) {
    console.log(index, element)
}

let isValid = nums.contains(1)
console.log(isValid);

console.log(sumArr(nums))
console.log(findLargest(nums))
console.log(getLength(nums))
