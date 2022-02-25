const cipher = {
  encode: function (offset, text) {
    let resultadoCifrado = "";
    console.log("el tamaño del texto es:", text.length);

    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      let nuevaPosicion = 0;
      let nuevaLetra = "";
      console.log("en la posición ", i, "la letra es: ", text[i]);

      if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) { //utilizacion del if para aplicar charCodeAt
        nuevaPosicion =
          ((text[i].charCodeAt() - 65 + parseInt(offset)) % 26) + 65; //formula aplicada

        nuevaLetra = String.fromCharCode(nuevaPosicion);
        resultadoCifrado = resultadoCifrado + nuevaLetra;

      }
    }
    return resultadoCifrado;
  },

  decode: function (offset, text) {
    //funcion para descifrar
     console.log("el valor que ingresa en offset2 es:", offset);
    console.log("el valor que ingresa para text2 es: ", text);
    let resultadoDescifrado = "";
    console.log("el tamaño del texto es:", text.length);
    text = text.toUpperCase();
    for (let i = 0; i < text.length; i++) {

      let nuevaPosicion = 0;
      let nuevaLetra = "";
      console.log("en la posición ", i, "la letra es: ", text[i]);
      
      if (text[i].charCodeAt() >= 65 && text[i].charCodeAt() <= 90) {
        console.log("esta letra está entre 65y90(A-Z) : ", text[i]);
        nuevaPosicion = ((text[i].charCodeAt() - 65 -  parseInt(offset)) % 26) + 65; //esto tengo quer , cambiar formula
        console.log("la nueva posicion es: ", nuevaPosicion);
        nuevaLetra = String.fromCharCode(nuevaPosicion);
        resultadoDescifrado = resultadoDescifrado + nuevaLetra;
        console.log("la nueva letra es", resultadoDescifrado);
        
      }
    }
    return resultadoDescifrado;
  }

}; 
export default cipher;
