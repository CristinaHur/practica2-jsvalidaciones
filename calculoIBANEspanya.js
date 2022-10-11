function calculoIBANEspanya(nCuenta){
    //buscamos 24 digitos ESCCXXXXXXXXXXXXXXXXXXXX
    //tenemos solo 20 digitos
    //poner al final 142800 tipo XXXXXXXXXXXXXXXXXXXX142800
    //Resto de dividir entre 97
    //98 menos ese resto, debe dar 2 digitos, si no lo hace poner 0 a la izq  
    //devolver ese número de control quedando como "ESXX" siendo XX los dos últimos digitos y después el resto del número de cuenta 
    
    //Compruebo si el número de cuenta es un número 
    if(isNaN(nCuenta)){
        return "Número de cuenta erroneo"
    }
    //Lo separo y le pongo el 142800 al final, opero con él
    let Numeros = nCuenta.split("");
    Numeros.push(142800);
    let nControl = BigInt(Numeros.join(""));
    nControl = nControl%BigInt(97);
    nControl = BigInt(98)-nControl;
    //Compruebo el resultado y lo devuelvo de forma correcta
    if(nControl<10){
        nControl="ES0"+nControl+nCuenta;
        return nControl;
    }else{
        nControl="ES"+nControl+nCuenta;
        return nControl;
    }
}
