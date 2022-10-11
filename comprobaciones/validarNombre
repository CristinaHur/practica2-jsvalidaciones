function nombre (nombre){

var primeraletra=nombre.slice(0,1);
let ascii=primeraletra.toUpperCase().charCodeAt(0);
var ultimaletra=nombre.slice(-1);
var ultascii=ultimaletra.toUpperCase().charCodeAt(0);
var retorno="";

if((ascii>64)&&(ascii<91)){
    var cont=0;
    for(let x=0;x<=nombre.length;x++){
        var caracter=nombre.charAt(x);

        if(((caracter<64)&&(caracter>91))&&((caracter<48)&&(caracter>57))&&(cadena!==170)&&(cadena!==186)&&(cadena!==46)&&(cadena!==45)){
            cont=cont++;
        }
        if (cont>1){
            retorno=1;//Caracter no valido en el texto;
        }else{
            if((ultascii>64)&&(ultascii<91)||((ultascii>48)&&(ultascii<57))||(ultascii==46)){
                retorno=0;//Valido
            }else{
                retorno=2;//Ultimo caracter no valido
            }
        }
    }
    
}else{
    retorno=3;//Posicion primera no valida
}
return retorno;
}
