var X = 10;
function Add_Numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_Numbers_2() {
    document.write(X + 100 + "<br><br>");
}
Add_Numbers_1();
Add_Numbers_2();

function Add_numbers_local() {
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_local_2() {
    document.write(Y + 100);
}
Add_numbers_local();
Add_numbers_local_2();

function get_Date() {
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function sample_1() {
    if (7 < 9) {
    document.getElementById("ifTry").innerHTML = "Deep Math!!!";
    }
    else {
    document.write("Try harder!!!");
    }
}
