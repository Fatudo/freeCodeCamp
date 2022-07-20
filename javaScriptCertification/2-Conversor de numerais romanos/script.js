function converterEmRomano(num) {
    const numerais = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    var resultado = "";
    for (var i in numerais) {
        while (num >= numerais[i]) {
            resultado += i;
            num -= numerais[i];
        }
    }
    return resultado;
}
   
converterEmRomano(36);