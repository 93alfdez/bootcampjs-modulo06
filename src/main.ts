// Variables y elementos
let puntuacionUsuario: number = 0;
let carta: number;
let cartasMostradas: number[] = [];


const elementoPuntuacion = document.getElementById('puntuacion');
const elementoMensaje = document.getElementById('mensaje');
let elementoImagenCarta = document.getElementById('imagen') as HTMLImageElement;


// Botón 'Dar Carta'
const botonDarCarta = document.getElementById('pideCarta');
botonDarCarta?.addEventListener('click', () => {
    dameCarta();
    muestraCarta(carta);
    muestraPuntuacion(carta);
});

// Botón 'Volver a jugar'
const botonReset = document.getElementById('reset');
botonReset?.addEventListener('click', () => {
    reset();
    if (botonQuePasaria instanceof HTMLButtonElement) {
        botonQuePasaria.disabled = false;
        botonQuePasaria.classList.remove('mostrar');
    };
});

// Botón 'Plantarse'
const botonPlantarse = document.getElementById('mePlanto');
botonPlantarse?.addEventListener('click', () => {
    plantarse();
    quePasaria();
});

// Botón 'Que pasaría'
const botonQuePasaria = document.getElementById('quePasaria');
botonQuePasaria?.addEventListener('click', () => {
    dameCarta();
    muestraPuntuacion(carta);
    muestraCarta(carta);
    if (elementoPuntuacion && elementoMensaje && botonQuePasaria instanceof HTMLButtonElement) {
        elementoPuntuacion.innerHTML = `Tu puntuación hubiese sido de ${puntuacionUsuario}`;
        elementoMensaje.innerHTML = '';
        botonQuePasaria.disabled = true;
    };
});

// Mostrar Puntuacion
const muestraPuntuacion = (carta: number) => {
    if (carta >= 10) {
        carta = 0.5;
    };

    puntuacionUsuario = puntuacionUsuario + carta;

    if (elementoPuntuacion && elementoMensaje) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
    };

    if (puntuacionUsuario > 7.5) {
        gameOver(puntuacionUsuario);
    };
}

// document.addEventListener(`DOMContentLoaded`, muestraPuntuacion);

// Pedir carta
const dameCarta = () => {

    carta = Math.floor(Math.random() * 10 + 1);

    if (carta > 7) {
        carta = carta + 2;
    };

    if (cartasMostradas.includes(carta)) {
        dameCarta();
        return;
    };

    cartasMostradas.push(carta);
};

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

// Game Over
const gameOver = (puntuacionUsuario: number) => {

    if (elementoPuntuacion && elementoMensaje) {
        elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
        elementoMensaje.innerHTML = 'Game over';
    }

    if (botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
        botonDarCarta.disabled = true;
        botonPlantarse.disabled = true;
    }
}

// Me Planto
const plantarse = () => {
    if (elementoMensaje && elementoPuntuacion) {
        if (puntuacionUsuario >= 0.5 && puntuacionUsuario <= 4) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Has sido muy conservador`;
        }
        else if (puntuacionUsuario === 5) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Te ha entrado el canguelo eh?`;
        }
        else if (puntuacionUsuario >= 6 || puntuacionUsuario === 7) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
            elementoMensaje.innerHTML = `Casi casi...`;
        }
        else if (puntuacionUsuario === 7.5 && botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
            elementoPuntuacion.innerHTML = `Tu puntuación es ${puntuacionUsuario}`;
            elementoMensaje.innerHTML = `¡Lo has clavado! ¡Enhorabuena!`;
            botonDarCarta.disabled = true;
            botonPlantarse.disabled = true;
        }
    }
};


// Nueva Partida
const reset = () => {

    if (botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement && botonQuePasaria instanceof HTMLButtonElement) {
        botonDarCarta.disabled = false;
        botonPlantarse.disabled = false;
        botonQuePasaria.classList.remove('mostrar');
    };

    if (elementoPuntuacion && elementoMensaje) {
        puntuacionUsuario = 0;
        elementoPuntuacion.innerHTML = '';
        elementoMensaje.innerHTML = '';
        elementoImagenCarta.src = '/src/images/back.png';
        cartasMostradas = [];
    };
};

// Qué hubiese pasado
const quePasaria = () => {
    if (puntuacionUsuario >= 0.5 && puntuacionUsuario <= 7) {
        if (botonQuePasaria instanceof HTMLButtonElement && botonDarCarta instanceof HTMLButtonElement && botonPlantarse instanceof HTMLButtonElement) {
            botonQuePasaria.className = 'mostrar';
            botonDarCarta.disabled = true;
            botonPlantarse.disabled = true;
        }
    }
};

