/*
function primera(evento) {
  
  const texto1 = document.getElementById("contenido1");
  const texto2 = texto1.value;
  console.log("hiciste clic");
  console.log("Función primera() llamada correctamente al hacer clic en el botón.");

  if (texto2.length !== 0) {
    alert("el contenido es " + texto2);
  } else {
    alert("campos vacios por favor digita el paarafo a encriptar");
  }
}

const encriptar = document.getElementById("encrita");
encriptar.addEventListener("click", primera);

function primera(evento) {
  
  const texto1 = document.getElementById("contenido1");
  const texto2 = texto1.value;
  console.log("hiciste clic");
  console.log("Función primera() llamada correctamente al hacer clic en el botón.");

  if (texto2.length !== 0) {
    alert("el contenido es " + texto2);
  } else {
    alert("campos vacios por favor digita el paarafo a encriptar");
  }
}

const desencriptar = document.getElementById("desencrita");
encriptar.addEventListener("click", segunda);
enter imes ai ober ufat
*/

 let vocales = ["enter", "imes", "ai", "ober", "ufat"];


let botonEncriptar = document.getElementById('botonEncriptar');
let botonDesencriptar = document.getElementById('botonDesencriptar');

botonEncriptar.addEventListener('click', function() {

  let texto1 = document.getElementById("contenido1");
  let texto2 = texto1.value;
  let textoEncriptado = "";
  let mensaje = document.getElementById ("parrafo1");
  let mensaje2 = document.getElementById("parrafo2");
  let imag = document.getElementById("iman");

  if (texto2.length !== 0 ) {
    for (let i = 0; i < texto2.length; i++) {
      if (texto2.charAt(i) === "a") {
        textoEncriptado += vocales[0];
      } else if (texto2.charAt(i) === "e") {
        textoEncriptado += vocales[1];
      } else if (texto2.charAt(i) === "i") {
        textoEncriptado += vocales[2];
      } else if (texto2.charAt(i) === "o") {
        textoEncriptado += vocales[3];
      } else if (texto2.charAt(i) === "u") {
        textoEncriptado += vocales[4]; 
      } else {
        textoEncriptado += texto2.charAt(i);
      }

    } 
      document.getElementById ("parrafo1").value = textoEncriptado; 
   mensaje.textContent = textoEncriptado;
  mensaje2.textContent = "mensaje encriptado con exito";
  imag.src = "img/supermarioencriptado.jpg";

    
  }else{
    alert("por favor ingresa las palabras a encriptar");
    imag.src="img/descarga.jpg"
        mensaje.textContent= "";
        mensaje2.textContent = "";

  }
}); 




botonDesencriptar.addEventListener('click', function() {

  let texto1 = document.getElementById("contenido1");
  let texto2 = texto1.value;
  let textoDesencriptado = "";
  let mensaje = document.getElementById ("parrafo1");
  let imag = document.getElementById("iman");
  let mensaje2 = document.getElementById ("parrafo2");
  if (texto2.length !== 0) {
    for (let i = 0; i < texto2.length; i++) {
      if (texto2.charAt(i) === vocales[0]) {
        textoDesencriptado += "a";
      } else if (texto2.charAt(i) === vocales[1]) {
        textoDesencriptado += "e";
      } else if (texto2.charAt(i) === vocales[2]) {
        textoDesencriptado += i;
      } else if (texto2.charAt(i) === vocales[3]) {
        textoDesencriptado += "O";
      } else if (texto2.charAt(i) === vocales[4]) {
        textoDesencriptado += "U"; 
      } else {
        textoDesencriptado += texto2.charAt(i);
        
      }
    }
  
    document.getElementById("parrafo1").value = textoDesencriptado;
   mensaje.textContent = textoDesencriptado;
     imag.src = "img/images (1).jpg";
  mensaje2.textContent = "MENSAJE DESENCRIPTADO CON EXITO";
  
  }else{
    alert("no hay texto para desencriptar");
   imag.src="img/descarga.jpg"
   mensaje.textContent= "";
  mensaje2.textContent = "";
  }
});

/*Pruebakj DE BUSQUEDA*/



/*PRUEBAjj DE BUSQUEDA*/












