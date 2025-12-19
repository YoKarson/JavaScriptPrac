




function reverseString(str) {
    return str.split("").reverse().join("")
}

function upperCaseFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1)
}

function getLastN(str, n) {
    return str.slice[-n]
}

function countWords(str) {
    let words = 0;
    str.trim();
    for (c of str.trim()) {
        if (c === " ") {
            words++;
        }
    }
    words++;
    return words;
}

console.log(reverseString("hello"));
console.log(upperCaseFirstLetter("hello"))
console.log(getLastN("hello", 2))
console.log(countWords("        hello how are you doing        "))