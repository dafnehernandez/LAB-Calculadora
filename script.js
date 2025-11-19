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
        return 0;
    }
    else if (a == 0){
        return 0;
    }
    else {
        return a / b;
    }   
}

/*let result = addition(10,5)
let result2 = subtraction(4,5)
let result3 = multiplication(6,8)
let result4 = division(4,2)

console.log("El resultado de la suma es: " + result, ", el resultado de resta es: " + result2,
", el resultado de la multiplicacion es: " + result3, ", el resultado de la division es: "+ result4);

*/

// Usando strings para los numeros
let num1 = "10";
let num2 = "5";
let result = addition(num1, num2);

console.log("Resultado de la operacion es: "+ result);