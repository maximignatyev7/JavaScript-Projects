document.write(typeof "Word");

function my_Function() {
    document.getElementById("Test").innerHTML = isNaN('7');
}

document.write(-2E310);

function plus_Infinity() {
    document.getElementById("Infin").innerHTML = -2E310;
}

document.write(11>7);

document.write(11<7);

console.log(8 + 2);

document.write("10" + 5);

document.write(50<47);

document.write(7==7);

X = 10;
Y = 10;
document.write(X === Y);

A = "10";
B = 10;
document.write(A === B);

C = 21;
D = 7;
document.write(C === D);

E = "Book";
F = 17;
document.write(E === F);

document.write(5 > 3 && 7 > 2);

document.write(5 > 3 && 7 < 2);

document.write(5 > 3 || 7 < 2);

document.write(5 > 8 || 7 < 2);

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

function true_not_Function() {
    document.getElementById("True_Not").innerHTML = ! (5 > 10);
}