window.onload=empezar;
function empezar(){
  document.formulario.validar.onclick=codigosControl;
  document.formulario.validar.onclick=esCIF;
  document.formulario.validar.onclick=esNif;
  document.formulario.validar.onclick=calculoIBANEspanya;
  document.formulario.validar.onclick=comprobarFax;
  document.formulario.validar.onclick=comprobarIBAN;
  document.formulario.validar.onclick=nombre;
  document.formulario.validar.onclick=esCodigoPostal;
  document.formulario.validar.onclick=comunidadesComprobacion;
  document.formulario.validar.onclick=valFecha;
}
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
  if ( bigIban % 97n == 1n ) {
      valid = true;
  }
  }
  
  return valid;
}

function esCIF(parametro){
  //como es
  //return 0-dato no valido 1-correcto 2-cif erroneo
  //formato CIF: letra(A), 7 digitos(1234567), caracter de control q será otro digito(8) o CIF: letra(A), 7 digitos(1234567), caracter de control q será otra letra(B)
  //para calcular el caracter de control: coger digitos en posiciones impares(1,3,5,7) y se multiplican por 2. Si eso da >9 se suman entre si ( 8 * 2 = 16 --> 1 + 6 = 7 ). Sino se coge el numero q salga (1b,2b,3b)
  //Se suman los resultados de esta última operación y se suman entre si (b1+b2+b3=B)
  //Se suman los numero en posiciones pares(a1+a2+a3=A)
  //Se suman estos dos últimos (C)
  //El último digito de C se lo restamos a 10 (ej:C=28 -> 10-8=D)
  //D=Numero de control o A = 1, B = 2, C = 3, D = 4, E = 5, F = 6, G = 7, H = 8, I = 9, J = 10 ó 0 si es letra
  
                  //Variables vairas
                  const formulario = document.forms[0];
                  const cif = formulario.elements["cif"].value;
                  const resolucion = formulario.elements["validacionCif"];
                  let partescif = cif.split("");
                  let D=partescif.shift();
                  let sumaimpar = 0;
                  let sumapar = 0;
                  let letras = ["J","A","B","C","D","E","F","G","H","I"];
  
                  // Impares por separado
                  for(let i = 0; i < partescif.length; i += 2){
                      //operaciones de impares 
                      partescif[i] = partescif[i] * 2;
                      if (partescif[i] >= 10){
                          partescif[i]=partescif[i] - 9;
                          
                      }
                      sumaimpar += partescif[i];
                  }
  
                  //Suma de pares 
                  for(let i = 1; i < partescif.length; i += 2){
                      partescif[i]=parseInt(partescif[i]);
                      sumapar += partescif[i];
                  }
                  //veo si los valores introducidos son de un cif(mejorable)
                  for(let i = 0; i < partescif.length; i++){
                  console.log(isNaN(partescif[i]));
                  if(isNaN(partescif[i])){
                  const trans = "No es un cif";   
                  resolucion.value = trans;
                  return 0;
                   }
                  }
               
  
                  //Comprobar si el número/letra es el correcto
                  let C = (10-((sumapar + sumaimpar)% 10))
                  
                  if (C == D||letras[C] == D){
                      const trans = "El cif es correcto";   
                      resolucion.value = trans;
                      return 1;
                  }else if (C !== D||letras[C] !== D){
                      const trans = "El CIF introducido es erroneo";
                      resolucion.value = trans;
                      return 2;
                  }
              }
   
  
  
  
   
  
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


 function esCodigoPostal(element1, elProvince){
  let patern = /^\d{5}$/
  if (!patern.test(element1.value)) {
      element1.value = "No valido"
      elProvince.value = "";
      elProvince.readOnly = true;
  }

  //Si el valor introducido es valido
  let value = parseInt(element1.value);
  let provincias = ["Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Illes Balears","Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad Real","Córdoba","Coruña","Cuenca","Girona","Granada","Guadalajara","Gipuzkoa","Huelva","Huesca","Jaén","León","Lleida","La Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Asturias","Palencia","Las Palmas","Pontevedra","Salamanca","S.C. Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Bizkaia","Zamora" ,"Zaragoza" ,"Ceuta" ,"Melilla"];
  if (Number.isInteger(value) && value <= 52999 && value >= 1000) {
      if (value.toString().length == 4) {
          elProvince.readOnly = true;
          elProvince.value = provincias[parseInt(String(value).slice(0,1)) - 1]
      } else if (value.toString().length == 5) {
          elProvince.readOnly = true;
          elProvince.value = provincias[parseInt(String(value).slice(0,2)) - 1]
      } else {
          console.log("novalidos")
      }
  } 
}
function comunidadesComprobacion(comunidad1,comunidad2,comunidad3,comunidad4,comunidad5,comunidad6,comunidad7,comunidad8,comunidad9,comunidad10,comunidad11,comunidad12,comunidad13,comunidad14,comunidad15,comunidad16,comunidad17){
  comunidades = [comunidad1,comunidad2,comunidad3,comunidad4,comunidad5,comunidad6,comunidad7,comunidad8,comunidad9,comunidad10,comunidad11,comunidad12,comunidad13,comunidad14,comunidad15,comunidad16,comunidad17]
  let contador = 0;
  console.log(comunidad1);
  for(let i = 0; i<comunidades.length;i++){
  if(comunidades[i].checked){
      contador++;
  }
  }
  if(contador>1){
      return true;
  }else{
      return false;
  }

}
function valFecha(elemento) {
  const fecha = new Date(elemento.value);
  return fecha instanceof Date && !isNaN(fecha);
}

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
  
