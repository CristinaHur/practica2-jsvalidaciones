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
