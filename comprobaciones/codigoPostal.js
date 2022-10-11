function esCodigoPostal(element1, elToReadOnly){
    let value = parseInt(element1.value);
    if (1000 <= value.length <= 5299) {
        elToReadOnly.readOnly = true;
    } else {
        elToReadOnly.readOnly = false;
    }
}