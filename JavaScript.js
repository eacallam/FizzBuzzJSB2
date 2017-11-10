var myDiv = document.getElementById("something");
var myButton = document.getElementById("btn");
var result = printFizzBuzz();

myButton.onclick = function () { myDiv.innerHTML = result };

function printFizzBuzz() {
    var returnVal = ""; //initializing the variable to an empty string
    for (var i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            returnVal += "FIZZBUZZ";
        }
        else if (i % 3 === 0) {
            returnVal += "FIZZ";
        }
        else if (i % 5 === 0) {
            returnVal += "BUZZ";
        }
        else {
            returnVal += i;
        }
        returnVal += "<br/>"
    }
    return returnVal;
}