function rot13(str) {
    var resultado = "";
    for (var i = 0; i < str.length; i++) {
      var numeroAscii = str[i].charCodeAt();
      if (numeroAscii >= 65 && numeroAscii <= 77) {
        resultado += String.fromCharCode(numeroAscii + 13);
      } else if (numeroAscii >= 78 && numeroAscii <= 90) {
        resultado += String.fromCharCode(numeroAscii - 13);
      } else {
        resultado += str[i];
      }
    }
    return resultado;
  }
  
rot13("SERR PBQR PNZC");