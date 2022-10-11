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
     
    
    
    
     
    