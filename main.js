
let archivoMensajes = [];


function enviar(donde, que) {
    let screen = document.getElementById(donde);
    var d = new Date();
    let texto = document.getElementById(que).value;

if(donde == "screen" && que == "input-input-texto"){

    if (texto === " ") {
        texto = " ";
    } else {

        screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
            + "</div>";

        archivoMensajes.push(texto);
    }

}else if(donde == "canales" && que == "input-canales"){
    screen.innerHTML += "<div>" + "<button class='boton-canales'>" + texto + "</button>" + "</div>";
}

    screen.scrollTop = screen.scrollHeight;


    document.getElementById(que).value = " ";
}



function abrirInputCanales(){
    let boton = document.getElementById("abrir-input");
    let divIntroducirCanal = document.getElementsByClassName("abre-crearCanal")[0];

    if(boton.classList.value === ""){
        boton.classList.value = "active"
        divIntroducirCanal.style.display = "flex"
    }else if (boton.classList.value !== ""){
        boton.classList.remove("active");
        divIntroducirCanal.style.display = "none"

    }
}

















document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        enviar("screen","input-input-texto");
    }
});

