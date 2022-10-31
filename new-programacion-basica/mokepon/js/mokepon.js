let ataqueJugador
let ataqueEnemigo
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById("boton-mascota")
    let botonFuego = document.getElementById("boton-fuego")
    let botonAgua = document.getElementById("boton-agua")
    let botonTierra = document.getElementById("boton-tierra")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    

}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    let mensaje
    if (inputHipodoge.checked) {
        mensaje="HIPODOGE"
    }else if (inputCapipepo.checked) {
        mensaje="CAPIPEPO"
    }else if (inputRatigueya.checked) {
        mensaje= "RATIGUEYA"
    }else{
        mensaje = "Null"
    }
    spanMascotaJugador.innerHTML = mensaje
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemigo = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    let mensaje
    if (mascotaEnemigo == 1) {
        mensaje="HIPODOGE"
    }else if (mascotaEnemigo == 2) {
        mensaje="CAPIPEPO"
    }else if (mascotaEnemigo == 3) {
        mensaje= "RATIGUEYA"
    }else{
        mensaje = "Null"
    }
    spanMascotaEnemigo.innerHTML = mensaje
}

window.addEventListener("load",iniciarJuego) 