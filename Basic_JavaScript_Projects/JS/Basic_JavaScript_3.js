function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Minus").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var Multiply = 6 * 8;
    document.getElementById("Multy").innerHTML = "6 * 8 = " + Multiply;
}

function division() {
    var Divide = 49/7;
    document.getElementById("Div").innerHTML = "49/7 = " + Divide;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Modulus").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Negation").innerHTML = -x;
}

var X = 5.25;
X--;
document.write(X);

var Y = 5;
Y++;
document.write(Y);

window.alert(Math.random() * 100);

function PI() {
document.getElementById("Number_PI").innerHTML = Math.PI;
}

function round_Math() {
    document.getElementById("Round").innerHTML = Math.round(5.4);
}

function power_Math() {
    document.getElementById("Power").innerHTML = Math.pow(12,2);
}