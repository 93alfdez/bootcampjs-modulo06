// document.addEventListener(`DOMContentLoaded`, muestraPuntuacion);
import "./style.css";

// Mostrar Puntuacion
let puntuacionUsuario: number = 0;
const elementoPuntuacion = document.getElementById('puntuacion');

const muestraPuntuacion = (carta: number) => {

    if (carta >= 10) {
        carta = 0.5;
    }

    puntuacionUsuario = puntuacionUsuario + carta;

    if (elementoPuntuacion) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
        // Game Over
        const gameOver = (puntuacionUsuario: number) => {
            if (puntuacionUsuario > 7.5 && botonDarCarta instanceof HTMLButtonElement) {
                elementoPuntuacion.innerHTML = 'Game over';
                botonDarCarta.disabled = true;
            }
        }
        gameOver(puntuacionUsuario);

    }
}


// Pedir carta
const dameCarta = () => {

    let carta = Math.floor(Math.random() * 10 + 1);
    if (carta > 7) {
        carta = carta + 2;
    }
    muestraCarta(carta);
    muestraPuntuacion(carta);
};

// Reset
const reset = () => {
    if (botonDarCarta instanceof HTMLButtonElement) {
        botonDarCarta.disabled = false;
        if (elementoPuntuacion) {
            puntuacionUsuario = 0;
            elementoPuntuacion.innerHTML = '';
            const cartaBack = '/src/images/back.jpg';
            elementoImagenCarta.src = cartaBack;
        }
    }
}

// Plantarse
const plantarse = () => {
    if (elementoPuntuacion) {
        if (puntuacionUsuario >= 0.5 && puntuacionUsuario <= 4) {
            let mensaje = 'Has sido muy conservador';
            elementoPuntuacion.innerHTML = mensaje;
        }
        if (puntuacionUsuario === 5) {
            elementoPuntuacion.innerHTML = 'Te ha entrado el canguelo eh?';
        }
        if (puntuacionUsuario === 6 || puntuacionUsuario === 7) {
            elementoPuntuacion.innerHTML = 'Casi casi...';
        }
        if (puntuacionUsuario === 7.5) {
            elementoPuntuacion.innerHTML = '¡Lo has clavado! ¡Enhorabuena!';
        }
    }
}

// Mostrar Carta
let elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;

const muestraCarta = (carta: number): void => {

    switch (carta) {
        case carta = 1:
            const asCopas = '/src/images/1_as-copas.jpg';
            elementoImagenCarta.src = asCopas;
            break;
        case carta = 2:
            const dosCopas = '/src/images/2_dos-copas.jpg';
            elementoImagenCarta.src = dosCopas;
            break;
        case carta = 3:
            const tresCopas = '/src/images/3_tres-copas.jpg';
            elementoImagenCarta.src = tresCopas;
            break;
        case carta = 4:
            const cuatroCopas = '/src/images/4_cuatro-copas.jpg';
            elementoImagenCarta.src = cuatroCopas;
            break;
        case carta = 5:
            const cincoCopas = '/src/images/5_cinco-copas.jpg';
            elementoImagenCarta.src = cincoCopas;
            break;
        case carta = 6:
            const seisCopas = '/src/images/6_seis-copas.jpg';
            elementoImagenCarta.src = seisCopas;
            break;
        case carta = 7:
            const sieteCopas = '/src/images/7_siete-copas.jpg';
            elementoImagenCarta.src = sieteCopas;
            break;
        case carta = 10:
            const sotaCopas = '/src/images/10_sota-copas.jpg';
            elementoImagenCarta.src = sotaCopas;
            break;
        case carta = 11:
            const caballoCopas = '/src/images/11_caballo-copas.jpg';
            elementoImagenCarta.src = caballoCopas;
            break;
        case carta = 12:
            const reyCopas = '/src/images/12_rey-copas.jpg';
            elementoImagenCarta.src = reyCopas;
            break;

    };
}


// Botón 'Dar Carta'
const botonDarCarta = document.getElementById('pideCarta');
botonDarCarta?.addEventListener('click', dameCarta);

// Botón 'Volver a jugar'
const botonReset = document.getElementById('reset');
botonReset?.addEventListener('click', reset);

// Botón 'Plantarse'
const botonPlantarse = document.getElementById('mePlanto');
botonPlantarse?.addEventListener('click', plantarse);