
let archivoMensajes = [];
let archivoPantallas = [];
let archivoCanales = [];
let baseDeDatos = [];


// ---------------------------Funcion de enviar inputs-----------------


function enviar(donde, que) {

    let screen = document.getElementsByClassName(donde)[0];
    var d = new Date();
    let texto = document.getElementsByClassName(que)[0].value;

    if (donde == "screen" && que == "input-input-texto") {

        if (texto.trim() === "") {
            texto = "";
        } else {

            screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
                + "</div>";

            archivoMensajes.push("<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
            + "</div>");
            archivoPantallas.push(screen.innerHTML);

        }

    } else if (donde == "canales" && que == "input-canales") {
        if (texto.trim() === "") {
            texto = "";
        } else {
            screen.innerHTML += "<div>" + "<button class='boton-canales' onclick='canal()'>" + texto + "</button>" + "</div>";

            archivoCanales.push(texto);

            function nuevoObjeto(titulo, usuario) {

                this.titulo= titulo;  
                this.usuario= usuario,
                this.mensajes= []
                
            };

            objetoAñadir = new nuevoObjeto(texto, usuario="no definido")
            agregar();
        }
    }
    screen.scrollTop = screen.scrollHeight;


    document.getElementsByClassName(que)[0].value = " ";
}

function agregar(){
baseDeDatos.push(objetoAñadir)
console.log(baseDeDatos);
}



// ------------------------fin funcion enviar inputs------------------------

// ---------------------------funcion abrir input canal---------------------------

function abrirInputCanales() {
    let boton = document.getElementsByClassName("abrir-input")[0];
    let divIntroducirCanal = document.getElementsByClassName("abre-crearCanal")[0];

    if (boton.classList.value === "abrir-input") {
        boton.classList.add("active");
        divIntroducirCanal.style.display = "flex"
    } else if (boton.classList.value == 'abrir-input active') {
        boton.classList.remove("active");
        divIntroducirCanal.style.display = "none"

    }
}

// -------------------------------fin funcion abrir input canal--------------------------


function canal() {
    if(document.getElementsByClassName('boton-canales')[0].innerHTML == baseDeDatos[0].titulo){
        console.log('si');
    }
}










// ------------------------event listener enter-----------------------------

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (document.getElementsByClassName("input-canales")[0].value !== "") {
            enviar("canales", "input-canales");
            document.getElementsByClassName("input-canales")[0].value = "";
        } else if (document.getElementsByClassName("input-canales")[0].value == "") {
            enviar("screen", "input-input-texto");
        }
    }
});

