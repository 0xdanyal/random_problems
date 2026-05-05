


// let string="hello"

// let reversed = string.split("").reverse().join("");

// console.log(reversed);


// no built-in methods - just logic building
let str = "hello";
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}

console.log(result);