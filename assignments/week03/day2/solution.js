// Print even numbers from 1 to 100 in decreasing order

// Using modulo operator

function decreasingEvenNumbers() {
    for(let i = 100; i > 0 ; i--) {
        if(i % 2 === 0) {
            console.log(i);
        }
    }
}

decreasingEvenNumbers();
