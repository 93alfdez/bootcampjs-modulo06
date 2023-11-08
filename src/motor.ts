import { partida } from "./model";

// Pedir carta
export const dameCarta = () => {

    partida.carta.valor = Math.floor(Math.random() * 10 + 1);

    if (partida.carta.valor > 7) {
        partida.carta.valor = partida.carta.valor + 2;
    };

    cartasMostradas();
};

// Cartas Mostradas
const cartasMostradas = () => {
    if (partida.cartasMostradas.includes(partida.carta)) {
        dameCarta();
        return;
    };

    partida.cartasMostradas.push(partida.carta);
}

// Actualiza la puntuación
export const actualizaPuntuacion = () => {

    if (partida.carta.valor >= 10) {
        partida.carta.valor = 0.5;
    };

    partida.puntuacionUsuario = partida.puntuacionUsuario + partida.carta.valor;
}

//Reset
export const reset = () => {
    partida.carta.valor = 0;
    partida.carta.url = '/src/images/back.png';
    partida.cartasMostradas = [];
}
