// Multiplication table of 5

// using map function
// function multiplicationTable() {

//     let tableOfNumber = Array(10).fill(5);
//     tableOfNumber.map(function(value, index) {
//         console.log(index+1 + " * " + value + " = " + (index+1) * value);
//     });
// }

// using for loop 

function multiplicationTable() {

    for (let i = 1; i <= 10; i++) {
        console.log(i + " * " + 5 + " = " + i * 5);
    }

}

multiplicationTable();