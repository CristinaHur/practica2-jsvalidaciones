function valFecha(elemento) {
    const fecha = new Date(elemento.value);
    return fecha instanceof Date && !isNaN(fecha);
}
