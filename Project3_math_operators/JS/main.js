
function addition() { //Defining and naming the addition function
    var add = 6+4;
    document.getElementById("Add").innerHTML ="6+4=" + add; //Print the result in HTML 
}

function subtraction() { //Defining and naming the addition function
    var sub = 10-5;
    document.getElementById("Sub").innerHTML ="10-5=" + sub; //Print the result in HTML 
}

function multiplication() { //Defining and naming the addition function
    var mult = 5*5;
    document.getElementById("Mlt").innerHTML ="5*5=" +mult; //Print the result in HTML 
}

function division() { //Defining and naming the addition function
    var divide = 39/3;
    document.getElementById("Div").innerHTML ="39/3=" + divide; //Print the result in HTML 
}

function random() { //Defining and naming the addition function
    document.getElementById("Ran").innerHTML =Math.random()*10; //Print the result in HTML 
}

function modulus_operator() { //Defining and naming the addition function
    var modulus = 40 % 4;
    document.getElementById("Mod").innerHTML =
    "When you divide 38 by 4 you have a remainder of:" + modulus; //Print the result in HTML 
}

function Increment() { //Defining and naming the addition function
    var value = document.getElementById("IncrementText").innerHTML; //Print the result in HTML 

    value++; //Add one to the value

    document.getElementById("IncrementText").innerHTML = value; //Print the result in HTML
}

function Decrement() { //Defining a function and naming it
    var value = document.getElementById("DecrementText").innerHTML; //Saves the text of the HTML element to a variable

    value--; //Substract one from the value

    document.getElementById("DecrementText").innerHTML = value; //Print the result in HTML
}