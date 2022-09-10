
let archivoMensajes = [];
let archivoPantallas = [];
let archivoCanales = [];
let baseDeDatos = [];


// ---------------------------Funcion de enviar inputs-----------------


function enviar(donde, que) {

    let screen = document.getElementsByClassName(donde)[0];
    var d = new Date();
    let texto = document.getElementsByClassName(que)[0].value;

    // -----------------------------Esta parte envía el texto a la screen ------------------

    if (donde == "screen" && que == "input-input-texto") {

        if (texto.trim() === "") {
            texto = "";
        } else {

            screen.innerHTML += "<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
                + "</div>";

            archivoMensajes.push("<div>" + "<p>" + texto + "</p>" + "<p class='fecha-hora'>" + d.getHours() + ":" + d.getMinutes() + "<br>" + d.toLocaleDateString() + "</p >"
                + "</div>");
            archivoPantallas.push(screen.innerHTML);

            for (let i = 0; i < baseDeDatos.length; i++) {
                if (baseDeDatos[i].titulo == document.getElementsByClassName("header-header")[0].innerHTML) {
                    baseDeDatos[i].mensajes.push(texto);
                    baseDeDatos[i].hora.push(d.getHours()+":"+d.getMinutes() + "<br>" + d.toLocaleDateString())
                }
                
            }

            


        }

// ---------------------------------Esta parte añade los canales------------------------

    } else if (donde == "canales" && que == "input-canales") {
         if (texto.trim() === "") {
            texto = "";
        } else {
            screen.innerHTML += '<div> <button class="boton-canales">' + texto.trim() + '</button>' + '</div>';
            archivoCanales.push(texto.trim());
            for(let i=0; i<archivoCanales.length;i++){
                let elemento = document.getElementsByClassName("boton-canales")[i];
                elemento.onclick = canal;
            }


            function cuentaCanales(titulo, usuario) {

                this.titulo = titulo;
                this.usuario = usuario,
                this.mensajes = [];
                this.hora = [];
            };

            objetoAñadir = new cuentaCanales(texto.trim(), usuario = "no definido")
            agregar();
        }
    }
    screen.scrollTop = screen.scrollHeight;


    document.getElementsByClassName(que)[0].value = "";
}


function agregar() {
    baseDeDatos.push(objetoAñadir)
    console.log(baseDeDatos);
}



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

// ------------------------------- funcion cambiar de canal--------------------------


function canal(){
    for(let i =0; i<baseDeDatos.length;i++){
        if(this.innerHTML == baseDeDatos[i].titulo){
           let contTitulo = document.getElementsByClassName("header-header")[0];
            document.getElementsByClassName("screen")[0].innerHTML="";
            contTitulo.innerHTML = baseDeDatos[i].titulo;
            for(let m=0;m<baseDeDatos[i].mensajes.length; m++){
                document.getElementsByClassName("screen")[0].innerHTML += "<div>" + "<p>" + baseDeDatos[i].mensajes[m] + "</p>" + "<p class='fecha-hora'>"+ baseDeDatos[i].hora[m] + "</p >"
                + "</div>";
            }
            
        
        }
    }
}


// -------------------------Buscador----------------------


let buscador=()=>{
    let textoBuscador = document.getElementsByClassName("input-busqueda")[0].value.trim(); 
    
    for (let i = 0; i < baseDeDatos.length; i++) {
      if(baseDeDatos[i].mensajes.includes(textoBuscador)){
        alert(`El mensaje que busca "${textoBuscador}" se encuentra en el canal: ${baseDeDatos[i].titulo}`)
      }
        
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

