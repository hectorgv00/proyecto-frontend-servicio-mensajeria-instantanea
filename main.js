
let archivoMensajes = [];
let archivoPantallas = [];


function enviar(donde, que) {
    let screen = document.getElementsByClassName(donde)[0];
    var d = new Date();
    let texto = document.getElementsByClassName(que)[0].value;

    if (donde == "screen" && que == "input-input-texto") {

        if (texto === " ") {
            texto = " ";
        } else {

            screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
                + "</div>";

            archivoMensajes.push(texto);
            archivoPantallas.push(screen.innerHTML);

        }

    } else if (donde == "canales" && que == "input-canales") {
        if (texto === "") {
            texto = "";
        } else {
            screen.innerHTML += "<div>" + "<button class='boton-canales'>" + texto + "</button>" + "</div>";

            document.getElementsByClassName("div-textos")[0].innerHTML = "<h2 class='header-header'>" + texto + "</h2>";
        }
    }
    screen.scrollTop = screen.scrollHeight;


    document.getElementsByClassName(que)[0].value = " ";
}



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

