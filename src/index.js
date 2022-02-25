import cipher from "./cipher.js";

//Obteniendo elementos del DOM con getElementById
const offset = document.getElementById("rango");
const text = document.getElementById("input-original");
const btnCifrar = document.getElementById("btn-cifrar");
const textCifrado = document.getElementById("texto-cifrado"); 

const offset2 = document.getElementById("rango2");
const text2 = document.getElementById("input-original2");
const btnDescifrar = document.getElementById("btn-descifrar");
const textDescifrado = document.getElementById("textoDescifrado"); 
//funcion
//Eventos del dom (registra un evento a un objeto)
btnCifrar.addEventListener("click", function () {   //al escuchar click se realiza la funcion encode
  let resultadoEncode= cipher.encode(offset.value, text.value);  // value da un valor a offset y text
textCifrado.value=resultadoEncode
});

   
 
btnDescifrar.addEventListener("click", function () { //al escuchar click se realiza la funcion decode
    let resultadoDecode= cipher.decode(offset2.value, text2.value); // dandole valor a offset y text
    textDescifrado.value= resultadoDecode

});
