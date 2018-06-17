window.cipher = {


encode:(offset,string) => {

let result ="";

for (i = 0; i < string.length; i++) {

let no_ascii = string.charCodeAt(i);

if (no_ascii >= 65 && no_ascii <= 90){

result += String.fromCharCode((no_ascii - 65 +  parseInt(offset)) % 26 + 65);

document.getElementById("resultado").innerHTML = ("Tu mensaje cifrado es:\n\n" +  result);
buttonDescifrar.className = 'visible';

}else if (no_ascii >= 97 && no_ascii <= 122) {
 result +=  String.fromCharCode((no_ascii - 97 + parseInt(offset)) % 26 + 97);
document.getElementById("resultado").innerHTML = ("Tu mensaje cifrado es:\n\n" + result );
buttonDescifrar.className = 'visible';

}else if (no_ascii === 32) {
 result += String.fromCharCode(no_ascii);
 buttonDescifrar.className = 'visible';

 document.getElementById("resultado").innerHTML = ("Tu mensaje cifrado es:\n\n" + result);

}

}

},

decode:(offset,string) => {

let descifrado ="";



    for (i = 0; i <string.length; i++) {
    let no_ascii = string.charCodeAt(i);

    if (no_ascii >= 65 && no_ascii <= 90){

   descifrado += String.fromCharCode((no_ascii - 90 - parseInt(offset)) % 26 + 90);
    document.getElementById("resultado").innerHTML = ("Tu mensaje descifrado es:" +  descifrado);

    }else if (no_ascii >= 97 && no_ascii <= 122) {
    descifrado +=  String.fromCharCode((no_ascii - 122 - parseInt(offset)) % 26 + 122);
   document.getElementById("resultado").innerHTML = ("Tu mensaje descifrado es:" +  descifrado);
    console.log(descifrado);
  }else if (no_ascii === 32) {
   descifrado += String.fromCharCode(no_ascii);
    document.getElementById("resultado").innerHTML = ("Tu mensaje descifrado es:" +  descifrado);

   }


    }

  }


};



function Inicio() {
    document.getElementById("GetStarted").style.display = "none";
}
