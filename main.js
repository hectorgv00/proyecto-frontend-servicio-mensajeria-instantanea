
let archivoMensajes = [];


function enviar() {
    let screen = document.getElementById("screen");
    var d = new Date();
    let texto = document.getElementById("input-input-texto").value;


    if (texto === " ") {
        document.getElementById("input-input-texto").value = " ";
    } else {

        screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
            + "</div>";

        archivoMensajes.push(texto);
    }

    
    screen.scrollTop = screen.scrollHeight;


    document.getElementById("input-input-texto").value = " ";
}





















document.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') {
        enviar();
    }
});
