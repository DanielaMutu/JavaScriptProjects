//variable with a Boolean data type
var x = true;

//printing the data type of the variable x
document.write(typeof x);
document.write("<br>");

//an expression combining a string and a number
document.write("17" + 17);
document.write("<br>");

//utilizing the == operator
document.write(10 == 10);
document.write("<br>");

//utilizing the === operator
x = 2;
y = 2;
document.write(x === y);
document.write("<br>");

//utilizing the > and && operators
document.write(12 > 5 && 12 > 5);
document.write("<br>");

//utilizing the < and || operators
document.write(11 < 5  || 11 < 5);
document.write("<br>");

//utilizing the | operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(1 > 2);
}
