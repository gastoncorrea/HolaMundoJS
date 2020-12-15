let a = parseInt(prompt());
let b = parseInt(prompt());
let c = parseInt(prompt());
if( a > b ){
    if ( a > c ){
        document.write('El mayor es a');
    }else {
        document.write('El mayor es c');
    }
}else {
    if( b > c){
        document.write('El mayor es b');
    }else {
        document.write('El mayor es c');
    }
}
