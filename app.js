function getNum(num) {
    result = document.getElementById("result");
    result.value += num;
}

function clearInput() {
    document.getElementById("result").value = "";
}

function getResult() {
    var result = document.getElementById("result");
    var r = eval(result.value);
    if (r == "Infinity") {
        result.value = "Syntax Error";
    } else {
        result.value = eval(result.value);
        console.log(result.value);
    }
}

function getSquare() {
    var result = document.getElementById("result");
    result.value = result.value * result.value;
}

function getSquareRoot() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}

function getSin() {
    var result = document.getElementById("result");
    result.value += Math.sin(result.value);
}

function getCos() {
    var result = document.getElementById("result");
    result.value += Math.cos(result.value);
}

function getTan() {
    var result = document.getElementById("result");
    result.value += Math.tan(result.value);
}

function getLog() {
    var result = document.getElementById("result");
    result.value += Math.log(result.value);
}

function getRan() {
    var result = document.getElementById("result");
    result.value += Math.floor(Math.random() * 100);
}

function getClean() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}