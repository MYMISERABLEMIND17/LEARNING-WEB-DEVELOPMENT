// function sum(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//   return a * b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function divide(a, b) {
//     return a / b;
// }
// console.log(sum(1, 2))


/* functional argument => basically passing the function as an argument is called fumctionalargument */

// Passing in what needs to be done as an argument.
function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}  

function doOperation(a, b, operation) {
    return operation(a, b)
}
    
console.log(doOperation(1, 2, subtract))
