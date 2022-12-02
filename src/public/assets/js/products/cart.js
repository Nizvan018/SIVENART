function calcular_anio(){
    var select = document.getElementById('anoVencimiento');
        var anioActual = new Date().getFullYear();
        for (var i = anioActual; i <= anioActual + 15; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = i;
            select.appendChild(option);
        }
}
calcular_anio();