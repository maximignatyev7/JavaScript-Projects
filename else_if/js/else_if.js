function Time_function() {
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0) {
        Replay = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Replay = "It is the afternoon";
    }
    else {
        Replay = "It is evening time";
    }
    document.getElementById("Time_of_day").innerHTML = Replay;
}