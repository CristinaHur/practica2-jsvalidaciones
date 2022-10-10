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
   
    }if((modulo1<10) && (modulo1>0)) {
      aux=modulo1;
  
    }
   
    if (modulo2==10) {
      aux1= "1";
      
    } if(modulo2==11) {
      aux1= "2";
 
   } if(modulo2<10 && modulo2>0){
    aux1 = modulo2;
  

   
  
  }
  document.formulario.codcontrol.value=aux += aux1;
}
