let string = document.getElementById("mensaje");
let offset = document.getElementById("num_salt");
let buttonCifrado=document.getElementById("buttonC");
let buttonDescifrar=document.getElementById("buttonD");


buttonCifrado.addEventListener("click", evento => {window.cipher.encode( offset.value, string.value)});
buttonDescifrar.addEventListener("click", evento => {window.cipher.decode( offset.value, string.value)});
Start.addEventListener('click', Inicio);
