function comprobarIBAN(iban){
    //true or false
    
    //Convertimos a mayuscula todo
    iban = iban.toUpperCase();

    //Definimos patron de regex como primer control
    let pattern = /([A-Za-z]{2}\d{2}[A-Za-z\d]{2,30})/;
    if (!pattern.test(iban)){
        return false;
    }

    //String iban como array de caracteres 
    iban = iban.split("");
    
    //Movemos los 4 primeros caracteres al final
    for (let i = 0; i < 4; i++){
        iban.push(iban.shift());
    }

    //Convertimos todas las letras en numeros 
    for (let i = 0; i < iban.length; i++){
        if (64 < iban[i].charCodeAt() && iban[i].charCodeAt() < 91){
            let transformedLetter = iban[i].charCodeAt() - 55;
            iban[i] = transformedLetter;
        } else {
            iban[i] = parseInt(iban[i]);
        }
    } 
    
    //Convertimos el string in BigInt y asi podemos dividir el numero sin problema entre 97n (97 de tipo BigInt)
    let valid = false;
    if (iban.length > 18) {
    const bigIban = BigInt(iban.join(""));
    if ( bigIban % 97n == 1n ) {valid = true;} {
        valid = true;
    }
    }
    
    return valid;
}
