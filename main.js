



function enviar(){
    let screen = document.getElementById("screen");

    var d = new Date();

    let texto = document.getElementById("input-input-texto").value;

    screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >" 
+    "</div>";

    // screen.innerHTML += "<p>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p>" 

    document.getElementById("input-input-texto").value = " ";




}

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
       enviar();
    }
});
