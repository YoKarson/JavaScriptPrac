const users = [
  { name: "Alex", age: 20 },
  { name: "Sam", age: 30 },
  { name: "Jordan", age: 25 }
];

const nums = [1, 2, 3, 4, 5]

function getEvens(arr) {
    const newArr = arr.map((num) => num * num)
    return newArr
}

console.log(getEvens(nums))