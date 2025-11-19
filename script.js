//Convert numbers from String to Number (float)
function convertToNumber(a,b){
    return [parseFloat(a), parseFloat(b)];
}

//Validate that both numbers aren't equal to zero
function validateNumber(a,b){
    if (a == 0 && b == 0){
        return 0;
    }
}

//Create function addition
function addition(a,b){
    [a,b] = convertToNumber(a,b);
    validateNumber(a,b);
    return a + b;
}
//Create function subtraction
function subtraction(a,b){
    [a,b] = convertToNumber(a,b);
    validateNumber(a,b);
    if (b == 0){
        return a;
    }
    //It's possible to make subtractions that give negative results
    return a - b ;
}
//Create function multiplication
function multiplication(a,b){
    [a,b] = convertToNumber(a,b);
    validateNumber(a,b);
    if(a == 0  || b == 0 ){
        return 0;
    }
    else {
        return a * b;
    }
        
}
//Create function division
function division(a,b){
    [a,b] = convertToNumber(a,b);
    validateNumber(a,b);
    if (b == 0){
    //return "cant' divide 0";
        return 0;
    }
    else if (a == 0){
        return 0;
    }
    else {
        return a / b;
    }   
}

// Using strings for numbers
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");

// Request operation
let operation = Number(prompt("Select operation:\n" + "1.-addition, 2.-subtraction, 3.-multiplication 4.-division\n"));

//Show result, operation and unique color
let result;
let color;
let text;

if (operation == 1) {
    result = addition(num1, num2);
    color = "goldenrod";
    text = "addition";

} else if (operation == 2) {
    result = subtraction(num1, num2);
    color = "turquoise";
    text = "subtraction";

} else if (operation == 3) {
    result = multiplication(num1, num2);
    color = "orchid";
    text = "multiplication";

} else if (operation == 4) {
    result = division(num1, num2);
    color = "red";
    text = "division";

} else {
    result = "Invalid operation. Use: addition, subtraction, multiplication or division.";
    color = "black";
}

//Show numbers on HTML
document.getElementById("numbers").innerHTML = `The numbers that will perform some operation are: <b>${num1}</b> y <b>${num2}</b>`;

//Show operation on HTML
document.getElementById("nameOperation").innerHTML = `<p style="color: ${color}; font-size: 20px;">The selected operation was: <b>${text}</b>`;

// Show the result on HTML whit color
document.getElementById("result").innerHTML = `<p style="color: ${color}; font-size: 20px;">Result: ${result}</p>`;

// Result on console
console.log(`Result is: ${result}`);