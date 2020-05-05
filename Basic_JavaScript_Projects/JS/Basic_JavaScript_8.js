function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function uppercase_Function() {
    var Animal = document.getElementById("Upper").innerHTML;
    document.getElementById("Upper").innerHTML = Animal.toUpperCase();
}

function mySearch() {
    var Animal_1 = "Horses are beautiful animals!";
    var hereSearch = Animal_1.search("animals");
    document.getElementById("Search").innerHTML = hereSearch;
}

function String_Method() {
    var X = 182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = Y.toPrecision(8);
}

function to_Fixed_method() {
    var A = 6.873;
    document.getElementById("To_Fixed").innerHTML = 
    A.toFixed(0) + "<br>" +
    A.toFixed(4);
}

function myValue_method() {
    var B = 745;
    document.getElementById("v_Method").innerHTML = 
    B.valueOf() + "<br>" +
    (745).valueOf() + "<br>" +
    (700 + 45).valueOf();
}