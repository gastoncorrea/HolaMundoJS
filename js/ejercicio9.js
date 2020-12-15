let frase = prompt('Ingrese una frase');
frase = frase.toLowerCase();
console.log(frase);
//bucle for
//hola mundo
//for(crear una variable; condicion ; incrementar o decrementar mi variable)
for (let i = 0; i < frase.length; i++) {
    console.log(i);
    if (frase.substr(i, 1) == 'a' || frase.substr(i, 1) == 'e' || frase.substr(i, 1) == 'i' || frase.substr(i, 1) == 'o' || frase.substr(i, 1) == 'u') {
        document.write(frase.substr(i,1));
    }
}