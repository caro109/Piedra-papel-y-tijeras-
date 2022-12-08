const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const puntajeuser = document.getElementById("user");
const puntajecpu = document.getElementById("cpu");
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');


let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [
    {
        name: "Piedra",
        url: "source/img/piedra.png" 
    },
    {
        name: "Papel",
        url: "source/img/papell.png" 
    },
    {
        name: "Tijeras",
        url: "source/img/tijera.png" 
    }
];



btnPiedra.addEventListener('click', function(){
    opcionJugador = "Piedra";
    opPc();
});

btnPapel.addEventListener('click', function(){
    opcionJugador = "Papel";
    opPc();
});

btnTijeras.addEventListener('click', function(){
    opcionJugador = "Tijeras";
    opPc();
})

// esta function es para camabiar los numero aleatorio por los nombres de 0 es piedra , 1 es papel y  2 es tijeras
function opPc(){
    var aleaorio = nAleatorio();

    if(aleaorio == 0){
        opcionPc = "Piedra";
    }else if(aleaorio == 1){
        opcionPc = "Papel";
    }else if(aleaorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();

};

let user = 0;
let cpu = 0;


// esta funcion hace las comparaciones y sus respectivos puntos
function batalla(){
    if(opcionJugador == opcionPc){
        msjBatalla.textContent = "Empate";
    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.textContent = "¡Gana Player!";
        user++;
        puntajeuser.textContent = user;
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.textContent = "¡Gana Player!";
        user++;
        puntajeuser.textContent = user;
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.textContent = "¡Gana Player!";
        user++;
        puntajeuser.textContent = user;
    }else{
        msjBatalla.textContent = "¡Gana Cpu!";
        cpu++;
        puntajecpu.textContent = cpu;
    };
    addImagenes();
    Raund();
}

// esta funcion ejecuta las rondas del juego si user llega a 3 puntos gana o si cpu llega a 3 gana
function Raund() {
    if (user === 3 || cpu === 3) {
        if (user === 3) {
            alert("¡FELICIDADES GANASTE LA PARTIDA!" );
            window.setTimeout(() => {
                window.location.reload()
              }, 1000);
        }
        if (cpu === 3) {
            alert("LA CPU GANO LA PERDIDA :´(");
            window.setTimeout(() => {
                window.location.reload()
              }, 1000);
        }
    };
}

// esta function obtiene los numeros aleatorio de 0 a 2
function nAleatorio(){
    let n = Math.floor(Math.random() * 3);
    return n;
}


function addImagenes(){
    for(let i=0;i<imagenes.length;i++){
        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };
};