/* Convert a number to HEX CODE 
var number = 243;

var numHex = number.toString(16);
console.log(numHex); */
// var color_array = [
//     "#E4959E", "#37515F", "#1F0812"

// ];

var color_array = colorArrayGenerate(4);

/* Initializing Variables */
var square = document.getElementsByClassName("square")
var p = document.querySelectorAll(".square p")

/* Main Code Here */
for (var index = 0; index < square.length; index++) {
    square[index].style.backgroundColor = color_array[index];
    p[index].textContent = color_array[index];

}


/* Function Code Here */
function colorGenerate() {
    

    var red = (Math.round(Math.random()* 127) + 127).toString(16);
    var green = (Math.round(Math.random()* 127) + 127).toString(16);
    var blue = (Math.round(Math.random()* 127) + 127).toString(16);
  
    var HEXCODE_ = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    
    return HEXCODE_;
}

function colorArrayGenerate(number){
    // Create an empty array
    var array = [];

    // Initialize empty array
    for(var i = 0; i < number; ++i){
        // Fill the array
        array.push(colorGenerate());
    }

    return array;

}