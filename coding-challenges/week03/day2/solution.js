// Check if given string is a palindrome
// eg. kayak, madam, malayalam

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        var str = str.toLowerCase();
        if (str[i] !== str[str.length - 1 - i]) {
            console.log("Not a palindrome");
            break;
        } else {
            console.log("Is a palindrome");
            break;
        }
    }
}

isPalindrome("kayak");
isPalindrome("casabalanca");