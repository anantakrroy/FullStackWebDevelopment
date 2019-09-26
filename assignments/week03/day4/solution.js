// Write a Javascript function that takes an array and a value and search that value in the array.
// Function should take two arguments - an array and a value to search inside the array.
// If the element is found, the function should return the position of the element in an array.
// If the element is not found, the function should return "-1".

// built in method
// function valIndexInArray(inputArray, value) {
//     return (value + " is at position: " + inputArray.indexOf(value));
// }

// for-loop
function valIndexInArray(inputArray, value) {
    for (let itr = 0; itr < inputArray.length; itr++) {
        if (inputArray[itr] === value) {
            return itr;
        }
    }
    return -1;
}

valIndexInArray(["hi","hello", 45, "peacock", 78],"peacock");
