import { partida } from "./model";
import { actualizaPuntuacion, dameCarta } from "./motor";

export const elementoPuntuacion = document.getElementById('puntuacion');
export const elementoMensaje = document.getElementById('mensaje');
export const elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;

// Botón 'Pide Carta'
export const botonDarCarta = document.getElementById('pideCarta');

botonDarCarta?.addEventListener('click', () => {
    dameCarta();
    actualizaPuntuacion();
    muestraCarta();
    muestraPuntuacion();
});

// Botón 'Volver a jugar'
const botonReset = document.getElementById('reset');
botonReset?.addEventListener('click', () => {
    iniciarPartida();
    resetUI();
});

// Botón 'Que pasaría'
const botonQuePasaria = document.getElementById('quePasaria');
botonQuePasaria?.addEventListener('click', () => {
    actualizaPuntuacion();
    dameCarta();
    muestraCarta();
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación hubiese sido de ${partida.puntuacionUsuario}`;
    };
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };
    if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.disabled = true;
    };
});


// Botón 'Plantarse'
const botonPlantarse = document.getElementById('mePlanto');
botonPlantarse?.addEventListener('click', () => {
    plantarse();
    quePasaria();
});

// Mostrar Puntuacion
export const muestraPuntuacion = () => {
    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
    };

    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };

    if (partida.puntuacionUsuario >= 7.5) {
        gameOver(partida.puntuacionUsuario);
    };
}

// Game Over
export const gameOver = (puntuacionUsuario: number) => {

    if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
    };

    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {

        elementoMensaje.innerHTML = 'Game over';

        if (partida.puntuacionUsuario === 7.5) {
            elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
        }
    };

    if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {

        botonDarCarta.disabled = true;

        if (partida.puntuacionUsuario === 7.5) {
            botonDarCarta.disabled = true;
        }
    };

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {

        botonPlantarse.disabled = true;

        if (partida.puntuacionUsuario === 7.5) {
            botonPlantarse.disabled = true;
        }
    };
}


// Mostrar Carta
export const muestraCarta = () => {
    if (elementoImagenCarta && elementoImagenCarta instanceof HTMLImageElement) {
        switch (partida.carta.valor) {
            case partida.carta.valor = 1:
                partida.carta.url = '/src/images/1_as-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 2:
                partida.carta.url = '/src/images/2_dos-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 3:
                partida.carta.url = '/src/images/3_tres-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 4:
                partida.carta.url = '/src/images/4_cuatro-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 5:
                partida.carta.url = '/src/images/5_cinco-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 6:
                partida.carta.url = '/src/images/6_seis-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 7:
                partida.carta.url = '/src/images/7_siete-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 10:
                partida.carta.url = '/src/images/10_sota-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 11:
                partida.carta.url = '/src/images/11_caballo-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
            case partida.carta.valor = 12:
                partida.carta.url = '/src/images/12_rey-copas.png';
                elementoImagenCarta.src = partida.carta.url;
                break;
        };
    }
};


// Me Planto
export const plantarse = () => {

    if (elementoPuntuacion &&
        elementoPuntuacion instanceof HTMLElement) {

        if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
        }
        if (partida.puntuacionUsuario === 5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
        }
        if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${partida.puntuacionUsuario}`;
        };
    };

    if (elementoMensaje &&
        elementoMensaje instanceof HTMLElement) {

        if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 4) {
            elementoMensaje.innerHTML = `Has sido muy conservador`;
        }
        if (partida.puntuacionUsuario === 5) {
            elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
        }
        if (partida.puntuacionUsuario >= 6 || partida.puntuacionUsuario === 7) {
            elementoMensaje.innerHTML = `Casi casi...`;
        };
    };
};

//Reset
export const iniciarPartida = () => {
    partida.puntuacionUsuario = 0;
    partida.carta.url = '/src/images/back.png';
    partida.cartasMostradas = [];
}


// Nueva Partida
const resetUI = () => {

    if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
        botonDarCarta.disabled = false;
    };

    if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
        botonPlantarse.disabled = false;
    };

    if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.classList.remove('mostrar');
    };

    if (elementoPuntuacion &&
        elementoPuntuacion instanceof HTMLElement) {
        elementoPuntuacion.innerHTML = '';
    };

    if (elementoMensaje &&
        elementoMensaje instanceof HTMLElement) {
        elementoMensaje.innerHTML = '';
    };
};

// Que pasaría
const quePasaria = () => {
    if (partida.puntuacionUsuario >= 0.5 && partida.puntuacionUsuario <= 7) {
        if (botonDarCarta && botonDarCarta instanceof HTMLButtonElement) {
            botonDarCarta.disabled = true;
        };

        if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
            botonPlantarse.disabled = true;
        };

        if (botonQuePasaria && botonQuePasaria instanceof HTMLButtonElement) {
            botonQuePasaria.className = 'mostrar';
        }
    }
};

