function esNif(dni) {
    var dni="0257416V";
    var numero="";
    let letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
    var letra1=dni.charAt(0);
    var dniNoLetra=dni.slice(0,-1);    if (letra1=="Y"){
        dni=dni.replace(letra1,"1");
    }else{
        if(letra1=="Z"){
            dni=dni.replace(letra1,"2");
        }
    }
    var dniNoLetra=dni.slice(0,-1);    if(isNaN(dniNoLetra)){
        numero=0;
    }else{
        alert(dni, dniNoLetra);
        if(((dni.length<8)&&(dni.length>6))||(dniNoLetra<=100000)){
            numero=3;
        }else{
        var numMax=dni.length;
        var numLetra=dniNoLetra%23;
        var letraultima=dni.slice(-1);
        if(letras[numLetra]!==letraultima){
            numero=1;
        }else{
            numero=2;
        }        }
    }    return(numero);
}