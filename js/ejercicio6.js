let a = parseInt(prompt('Ingrese un numero'));
let b = parseInt(prompt('Ingrese otro numero'));
if ( a > b ){
    document.write('El numero mayor es :  ' + a)
} else if ( a < b ) {
    document.write('El numero mayor es : ' + b)
}else{
    document.write('Los numeros ingresados son iguales')
}