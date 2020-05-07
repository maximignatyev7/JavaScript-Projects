function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myName() {
    var Name = "Maxim Ignatyev";
    var letters = Name.length;
    document.getElementById("Length_of_name").innerHTML = letters;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " +
    Cat_Picture[3] + ".";
}

function constant_function() {
    const Musical_Inastrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Inastrument.color = "brown";
    Musical_Inastrument.price = "$1000";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Inastrument.color + " " +
        Musical_Inastrument.type + " was " + Musical_Inastrument.price + ".";
}

var F = 77;
document.write(F);
{
    let F = 44;
    document.write("<br>" + F);
}
document.write("<br>" + F);

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021",
    color: "red",
    description : function() {
        return "The car is a " + this.year + " " + this.color + " " +
        this.make + " " + this.model + ".";
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var my_Text = "";
var j;
for (j = 0; j < 10; j++) {
    if (j === 5) { break; } 
    my_Text += "The number is " + j + "<br>";
}
document.getElementById("Break").innerHTML = my_Text;

var my_Text_1 = "";
var e;
for (e = 0; e < 7; e++) {
    if (e === 4) {continue;}
    my_Text_1 += "The number is " + e + "<br>";
}
document.getElementById("Continue").innerHTML = my_Text_1;