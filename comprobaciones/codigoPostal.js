function esCodigoPostal(element1, elProvince){
    let patern = /\d{5}/
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
