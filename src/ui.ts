import { partida } from "./model";
import { dameCarta } from "./motor";

export const elementoPuntuacion = document.getElementById('puntuacion');
export const elementoMensaje = document.getElementById('mensaje');
export let elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;


// Botón 'Dar Carta'
export const botonDarCarta = document.getElementById('pideCarta');
botonDarCarta?.addEventListener('click', () => {
    dameCarta();
    muestraCarta(partida.carta);
    muestraPuntuacion(partida.carta);
});

// Botón 'Volver a jugar'
export const botonReset = document.getElementById('reset');
botonReset?.addEventListener('click', () => {
    reset();
    if (botonQuePasaria !== null && botonQuePasaria !== undefined) {
        if (botonQuePasaria instanceof HTMLButtonElement) {
            botonQuePasaria.disabled = false;
            botonQuePasaria.classList.remove('mostrar');
        };
    }
});

// Botón 'Plantarse'
export const botonPlantarse = document.getElementById('mePlanto');
botonPlantarse?.addEventListener('click', () => {
    plantarse();
    quePasaria();
});

// Botón 'Que pasaría'
export const botonQuePasaria = document.getElementById('quePasaria');
botonQuePasaria?.addEventListener('click', () => {
    dameCarta();
    muestraPuntuacion(partida.carta);
    muestraCarta(partida.carta);
    if (elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoMensaje !== null &&
        elementoMensaje !== undefined) {
        if (botonQuePasaria instanceof HTMLButtonElement) {
            elementoPuntuacion.innerHTML = `Tu puntuación hubiese sido de ${partida.puntuacionUsuario}`;
            elementoMensaje.innerHTML = '';
            botonQuePasaria.disabled = true;
        };
    };
});

// Game Over
export const gameOver = (puntuacionUsuario: number) => {

    if (elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoMensaje !== null &&
        elementoMensaje !== undefined) {
        if (elementoPuntuacion && elementoMensaje) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
            elementoMensaje.innerHTML = 'Game over';
        }
        if (botonDarCarta !== null &&
            botonDarCarta !== undefined &&
            botonPlantarse !== null &&
            botonPlantarse !== undefined) {

            if (botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
                botonDarCarta.disabled = true;
                botonPlantarse.disabled = true;
            };

            if (partida.puntuacionUsuario === 7.5 && botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
                elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
                botonDarCarta.disabled = true;
                botonPlantarse.disabled = true;
            };
        }
    };
}

// Mostrar Puntuacion
export const muestraPuntuacion = (carta: number) => {
    if (partida.carta >= 10) {
        partida.carta = 0.5;
    };

    partida.puntuacionUsuario = partida.puntuacionUsuario + carta;

    if (elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoMensaje !== null &&
        elementoMensaje !== undefined) {
        if (elementoPuntuacion && elementoMensaje) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
        };
    }


    if (partida.puntuacionUsuario >= 7.5) {
        gameOver(partida.puntuacionUsuario);
    };
}

// Mostrar Carta
const muestraCarta = (carta: number): void => {
    switch (carta) {
        case carta = 1:
            const asCopas = '/src/images/1_as-copas.png';
            elementoImagenCarta.src = asCopas;
            break;
        case carta = 2:
            const dosCopas = '/src/images/2_dos-copas.png';
            elementoImagenCarta.src = dosCopas;
            break;
        case carta = 3:
            const tresCopas = '/src/images/3_tres-copas.png';
            elementoImagenCarta.src = tresCopas;
            break;
        case carta = 4:
            const cuatroCopas = '/src/images/4_cuatro-copas.png';
            elementoImagenCarta.src = cuatroCopas;
            break;
        case carta = 5:
            const cincoCopas = '/src/images/5_cinco-copas.png';
            elementoImagenCarta.src = cincoCopas;
            break;
        case carta = 6:
            const seisCopas = '/src/images/6_seis-copas.png';
            elementoImagenCarta.src = seisCopas;
            break;
        case carta = 7:
            const sieteCopas = '/src/images/7_siete-copas.png';
            elementoImagenCarta.src = sieteCopas;
            break;
        case carta = 10:
            const sotaCopas = '/src/images/10_sota-copas.png';
            elementoImagenCarta.src = sotaCopas;
            break;
        case carta = 11:
            const caballoCopas = '/src/images/11_caballo-copas.png';
            elementoImagenCarta.src = caballoCopas;
            break;
        case carta = 12:
            const reyCopas = '/src/images/12_rey-copas.png';
            elementoImagenCarta.src = reyCopas;
            break;
    };
};


// Me Planto
export const plantarse = () => {
    if (elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoMensaje !== null &&
        elementoMensaje !== undefined) {
        if (elementoMensaje && elementoPuntuacion) {
            if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Has sido muy conservador`;
            }
            if (partida.puntuacionUsuario === 5) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
            }
            if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
                elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
                elementoMensaje.innerHTML = `Casi casi...`;
            };
        }
    }
};

// Nueva Partida
const reset = () => {

    if (botonDarCarta !== null &&
        botonDarCarta !== undefined &&
        botonPlantarse !== null &&
        botonPlantarse !== undefined &&
        botonQuePasaria !== null &&
        botonQuePasaria !== undefined) {
        if (botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement && botonQuePasaria instanceof HTMLButtonElement) {
            botonDarCarta.disabled = false;
            botonPlantarse.disabled = false;
            botonQuePasaria.classList.remove('mostrar');
        };
    }

    if (elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoMensaje !== null &&
        elementoMensaje !== undefined) {
        if (elementoPuntuacion && elementoMensaje) {
            partida.puntuacionUsuario = 0;
            elementoPuntuacion.innerHTML = '';
            elementoMensaje.innerHTML = '';
            elementoImagenCarta.src = '/src/images/back.png';
            partida.cartasMostradas = [];
        };
    }
};

// Qué hubiese pasado
const quePasaria = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 7) {
        if (botonDarCarta !== null &&
            botonDarCarta !== undefined &&
            botonPlantarse !== null &&
            botonPlantarse !== undefined &&
            botonQuePasaria !== null &&
            botonQuePasaria !== undefined) {
            if (botonQuePasaria instanceof HTMLButtonElement && botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
                botonQuePasaria.className = 'mostrar';
                botonDarCarta.disabled = true;
                botonPlantarse.disabled = true;
            }
        }
    }
};


// Iniciar partida
export const iniciarPartida = () => {
    partida.carta = 0;
    partida.cartasMostradas = [];
    partida.puntuacionUsuario = 0;
    dameCarta();
}
