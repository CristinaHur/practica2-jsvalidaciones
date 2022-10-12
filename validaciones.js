window.onload=empezar;
function empezar(){
  document.formulario.validar.onclick=codigosControl;
}

function codigosControl(){
  let codBanco=document.formulario.codbanco.value;
  let numSucursal=document.formulario.codoficina.value;
  let numCuenta=document.formulario.numcuenta.value;
  let numero1=(codBanco[0]*4)+(codBanco[1]*8)+(codBanco[2]*5)+(codBanco[3]*10);
  let numero2=(numSucursal[0]*9)+(numSucursal[1]*7)+(numSucursal[2]*3)+(numSucursal[3]*6);
  let numero3= (numCuenta[0]*1)+(numCuenta[1]*2)+(numCuenta[2]*4)+
  (numCuenta[3]*8)+(numCuenta[4]*5)+(numCuenta[5]*10)+(numCuenta[6]*9)+
  (numCuenta[7]*7)+(numCuenta[8]*3)+(numCuenta[9]*6);
  let resto1=parseInt((numero1+numero2)%11);
  let resto2=parseInt((numero3)%11);
  let modulo1=parseInt(11-resto1); 
  let modulo2=parseInt(11-resto2);
  let aux;
  let aux1;

  if (modulo1==10) {
    aux="1";
   
  } if(modulo1==11) {
    aux="0";
 
  }if((modulo1<10) ) {
    aux=modulo1;

  }
 
  if (modulo2==10) {
    aux1= "1";
    
  } if(modulo2==11) {
    aux1= "2";

 } if(modulo2<10 ){
  aux1 = modulo2;
}
document.formulario.codcontrol.value=aux +""+aux1;
if(codBanco.length<4 || codBanco.length>4 ||(numCuenta<"z" && numCuenta>"a")){
  console.log("Hay algún valor incorrecto en el Código del banco");
}
if(numSucursal.length<4 || numSucursal.length>4  || (numSucursal<"z" && numSucursal>"a")){
  console.log("Hay algún valor incorrecto en el Número de oficina");
}
if(numCuenta.length<10 || numCuenta.length>10 ||(numCuenta<"z" && numCuenta>"a")){
 console.log("Hay algún valor incorrecto en el Número de cuenta");
}

}





function comprobarFax(){
  let cfax=document.formulario.fax.value;
  
  if((cfax.length>9) || (cfax.length<9) || (cfax.charAt(0) !=9) ){
    console.log("Fax incorrecto");
  }
  
 }




