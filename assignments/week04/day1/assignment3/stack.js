var resultStack = [];
var pushBtn = document.getElementById('push');
var popBtn = document.getElementById('pop');

pushBtn.addEventListener('click', pushToStack);
popBtn.addEventListener('click', popFromStack);

// Push to stack
function pushToStack() {
    if (document.getElementsByTagName('input')[0].value === "") {
        alert("Empty input ! Nothing to push!");
    } else {
        resultStack.push(document.getElementsByTagName('input')[0].value);
        document.getElementsByTagName('h3')[0].innerText = resultStack.join(' '); 
        document.getElementsByTagName('input')[0].value = "";
    }
}

// Pop from stack
function popFromStack() {
    if (document.getElementsByTagName('h3')[0].innerText === "") {
        alert("Nothing to pop! Stack is empty");
    } else {
        resultStack.pop();
        document.getElementsByTagName('h3')[0].innerText = resultStack.join(' ');
    }
}