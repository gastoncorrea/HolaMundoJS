let estacion = prompt('Selecione su estacion preferida : 1- Verano, 2- Otoño, 3- Invierno, 4- Primavera');
console.log(estacion);
switch (estacion) {
    case '1':
        document.write('El usuario selecciono la estacion verano');
        break;
    case '2':
        document.write('El usuario selecciono la estacion otoño');
        break;
    case '3':
        document.write('El usuario selecciono la estacion invierno');
        break;
    case '4':
        document.write('El usuario selecciono la estacion primavera');
        break;
    default:
        document.write('El usuario selecciono una opcion invalida') 
}