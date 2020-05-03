function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall anough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Fruit(Name, Taste, Color) {
    this.Fruit_Name = Name;
    this.Fruit_Taste = Taste;
    this.Fruit_Color = Color;
}
var firstFruit = new Fruit("Apple", "Sour", "Green");
var secondFruit = new Fruit("Banana", "Sweet", "Yellow");
function favoriteFruit() {
    document.getElementById("New_and_This").innerHTML = "If you eat " + 
    firstFruit.Fruit_Color + " " + firstFruit.Fruit_Name + "s, you have good health!"
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}