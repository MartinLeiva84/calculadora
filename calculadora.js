
 const suma = (num1,num2)=>{
    return parseInt(num1) + parseInt(num2);
 }
const resta = (num1,num2)=>{
    return parseInt(num1) - parseInt(num2);
}
const division = (num1,num2)=>{
    return parseInt(num1) / parseInt(num2);
}
const multiplicacion = (num1,num2)=>{
    return parseInt(num1) * parseInt(num2);
}

alert("Que operacion realizaras?");
let operacion = prompt("1 = suma", "2 = resta", "3 = división", "4 = multiplicación");

if (operacion == "1"){
    let numero1 = prompt("escribe el número a sumar");
    let numero2 = prompt("siguiente número a sumar");
    resultado = suma (numero1,numero2);
    alert(`El resultado es = ${resultado}`);
}

else if (operacion == "2"){
    let numero1 = prompt("escribe el número a restar");
    let numero2 = prompt("siguiente número a restar");
    resultado = resta (numero1,numero2);
    alert(`El resultado es = ${resultado}`);
}

else if (operacion == "3"){
    let numero1 = prompt("escribe el número a dividir");
    let numero2 = prompt("siguiente número a dividir");
    resultado = division (numero1,numero2);
    alert(`El resultado es = ${resultado}`);
}

else if (operacion == "4"){
    let numero1 = prompt("escribe el número a multiplicar");
    let numero2 = prompt("siguiente número a multiplicar");
    resultado = multiplicacion (numero1,numero2);
    alert(`El resultado es = ${resultado}`);
} else{
    alert('No has seleccionado ninguna operación');
}




