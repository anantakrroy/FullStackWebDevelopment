var addBtn = document.getElementById('add');
var subtractBtn = document.getElementById('subtract');
var multiplyBtn = document.getElementById('multiply');
var divideBtn = document.getElementById('divide');
addBtn.addEventListener('click', addNums);
subtract.addEventListener('click', subtractNums);
multiplyBtn.addEventListener('click',multiplyNums);
divideBtn.addEventListener('click', divideNums);

function addNums() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    var result = input1 + input2;
    document.getElementById("result").value = result;
}

function subtractNums() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    var result = input1 - input2;
    document.getElementById("result").value = result;
}

function multiplyNums() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    var result = input1 * input2;
    document.getElementById("result").value = result;
}

function divideNums() {
    var input1 = parseInt(document.getElementById('input1').value);
    var input2 = parseInt(document.getElementById('input2').value);
    var result = input1 / input2;
    document.getElementById("result").value = result;
}

