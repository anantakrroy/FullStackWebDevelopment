var userName = "kr.innovate@gmail.com";
var passWord = "webdom!1";
// Check for empty email
// Check if email begins with .
// Check if @ missing
// Check if . before @
// check if email ends with @gmail.com(HARDCODED)

function validateEmail() {
    if (document.getElementById('email').value === "") {
        alert("Username cannot be empty!");
    } else if (document.getElementById('email').value.indexOf('.') === 0) {
        alert("Username cannot start a .(dot)!");
    } else if (document.getElementById('email').value.includes("@") === false) {
        alert('Enter valid username. @ missing!');
    } else if (document.getElementById('email').value.indexOf('.') === document.getElementById('email').value.indexOf('@') - 1) {
        alert("Dot cannot be before @!");
    } else if (document.getElementById('email').value.endsWith('@gmail.com') === false) {
        alert('Enter valid username!');
    } else if (document.getElementById('email').value !== userName){
        alert("Username does not match with records!");
    } else {
        alert("Username success!");
    }
}

// empty password
// special characters missing
// atleast 6 characters needed

function validatePassword() {
    if(document.getElementById('password').value.length < 8) {
        alert("Password should be atleast 8 characters long!");
    } 
    else if (document.getElementById('password').value === "") {
        alert("Password cannot be empty!");
    } else if (document.getElementById('password').value.includes("!") === false){
        alert("Enter special character in Password!");
    } else if(document.getElementById('password').value !== passWord){
        alert("Password does not match records!");
    } else {
        alert('Password success!');
    }
}
