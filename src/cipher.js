window.cipher = {
  // ...
};
men = document.getElementById("mensaje");
salt = document.getElementById("num_salt");

function cifrar()
      {


let mensa = men.value;
let saltos = parseInt(salt.value);
for (i = 0; i < mensa.length; i++) {
let no_ascii = mensa.charCodeAt(i);

if (no_ascii >= 65 && no_ascii <= 90){

result = String.fromCharCode((no_ascii - 65 + saltos) % 26 + 65);
document.getElementById("resultado").innerHTML = result;

}else if (no_ascii >= 97 && no_ascii <= 122) {
 result =  String.fromCharCode((no_ascii - 97 + saltos) % 26 + 97);
document.getElementById("resultado").innerHTML = result;
console.log(result);
}else

if (no_ascii === 32) {
 result = String.fromCharCode(no_ascii);
   document.getElementById("resultado").innerHTML = result;
console.log(result);
 }
}
     }

     function descifrar()
           {


     let mensa = men.value;
     let saltos = parseInt(salt.value);
     for (i = 0; i < mensa.length; i++) {
     let no_ascii = mensa.charCodeAt(i);

     if (no_ascii >= 65 && no_ascii <= 90){

    let descifrado = String.fromCharCode((no_ascii - 65 - saltos + 26 * 2) % 26 + 65);
     document.getElementById("resultado").innerHTML = descifrado;

     }else if (no_ascii >= 97 && no_ascii <= 122) {
     let descifrado =  String.fromCharCode((no_ascii - 97 -saltos + 26 * 2) % 26 + 97);
     document.getElementById("resultado").innerHTML = descifrado;
     console.log(descifrado);
   }else

   if (no_ascii === 32) {
    descifrado = String.fromCharCode(no_ascii);
      document.getElementById("resultado").innerHTML = descifrado;
   console.log(descifrado);
    }


     }
          }
